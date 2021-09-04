import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextService {
  private jsonUrl = '/assets/text.json';

  constructor(private http: HttpClient) { }

  getText() {
    return this.http.get<{ id: number; story: string; question: string; choices: object; text: string; goTo: number; }[]>(
      this.jsonUrl
    );
  }

  getStory() {
    return this.http.get<{ id: number; story: string; }[]>(
      this.jsonUrl
    );
  }

  getQuestion() {
    return this.http.get<{ id: number; question: string; }[]>(
      this.jsonUrl
    );
  }

  getChoices() {
    return this.http.get<{ id: number; choices: object; text: string; goTo: number; }[]>(
      this.jsonUrl
    );
  }
}
