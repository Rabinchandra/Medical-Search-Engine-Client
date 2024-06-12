import { TestBed } from '@angular/core/testing';

import { MedicalSuggestionService } from './medical-suggestion.service';

describe('MedicalSuggestionService', () => {
  let service: MedicalSuggestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedicalSuggestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
