import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
// import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// import { TextInterface } from "../interfaces/text-interface";

@Injectable({
  providedIn: 'root'
})

export class TextService< T = any > {
  private jsonUrl: string = '/assets/text.json';

  constructor(private http: HttpClient) {
  }

  public getText(next?: (value: T[]) => void): Subscription {
    return this.http.get<T[]>(this.jsonUrl)
      .pipe(
        map((response: any) => {
          const parsedResponse = response;
          console.log(parsedResponse,response);
          return parsedResponse;
        })
      )
      .subscribe(next);
  }
}
