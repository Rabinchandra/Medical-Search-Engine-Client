import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MedicalSuggestionService } from '../../services/medical-suggestion.service';
import { IMedicalSearchResponse } from '../../../interface/IMedicalSearchResponse';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  searchText: string = '';
  responseTreatment: string = '';
  responseRecommend: string = '';

  isLoading = false;

  @ViewChild('treatmentDiv') treatmentDiv!: ElementRef;
  @ViewChild('recommendDiv') recommendDiv!: ElementRef;

  constructor(
    private medicalSuggestionService: MedicalSuggestionService,
    private renderer: Renderer2
  ) {}

  formatTextWithBold(text: string) {
    // Replace starting '**' with '<b>'
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    return text;
  }

  onSearch() {
    this.isLoading = true;

    this.medicalSuggestionService
      .search(this.searchText)
      .then((res: IMedicalSearchResponse) => {
        this.responseTreatment = this.formatTextWithBold(res.treatment)
          .replace(/<li>/g, '<li style="padding-bottom: 16px;">')
          .replace(/<h2>/g, '<h2 style="padding-bottom: 20px;">');

        this.responseRecommend = res.recommendation
          .replace(/<li>/g, '<li style="padding-bottom: 16px;">')
          .replace(/<h2>/g, '<h2 style="padding-bottom: 20px;">');

        // Insert the response to the html view
        this.treatmentDiv.nativeElement.innerHTML = this.responseTreatment;
        this.recommendDiv.nativeElement.innerHTML = this.responseRecommend;

        this.isLoading = false;
      })
      .catch((err) => {
        console.log('Something went wrong!!');

        this.isLoading = false;
      });
  }
}
