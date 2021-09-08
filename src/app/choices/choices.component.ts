import { Component, OnInit } from '@angular/core';
import { TextService } from "../services/text.service";

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {
  public pages?: any[];

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.textService.getText((text: any[]) => {
      this.pages = text;
    });
  }
}
