import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class TextService< T = any > {
  private jsonUrl: string = '../assets/text.json';

  constructor(private http: HttpClient) {
  }

  public getText(next?: (value: T[]) => void): Subscription {
    return this.http.get<T[]>(this.jsonUrl)
      .pipe(
        map((response: any) => {
          return response;
        })
      )
      .subscribe(next);
  }
}
