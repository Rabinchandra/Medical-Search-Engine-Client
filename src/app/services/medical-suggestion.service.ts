import { Injectable } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root',
})
export class MedicalSuggestionService {
  private genAI: GoogleGenerativeAI;
  private model: GenerativeModel;

  constructor() {
    this.genAI = new GoogleGenerativeAI(
      'AIzaSyCldMi5KduWmeezUol8LLg3if_7h-UuaTE'
    );
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  }

  async search(patientInput: string) {
    const prompt = `this application suggests patients to go for which type of treatment and consult which doctor 
      important: Response should be only in JSON format like this so that i can extract the data: { treatment: "some text", recommendation: "some text"}
      Note: Treatment should be of atleast 100 words. Return each value string in the json with proper suitable html tag
      Examples:
      1. User Query: "I have been experiencing chest pain and shortness of breath."
         Response should be in json: 
         { treatment: "some treatments...",
         recommendation: "Recommend consulting a cardiologist for further evaluation and treatment. Possible treatments may include medication, lifestyle changes, or cardiac interventions." }
  
      
      Please ensure that the recommendations provided are accurate, relevant, and considerate of the user's medical needs and preferences. Use natural language understanding techniques to extract key information from the user query and tailor the recommendations accordingly.
  
      User input: ${patientInput}
      `;

    const result = await this.model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    const final = JSON.parse(
      text.replace('```json', '').replace('```', '').trim()
    );

    return final;
  }
}
