import {Component, OnInit} from '@angular/core';
import {TextService} from "./services/text.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentPageId: number = 0;
  public pages?: any[];

  constructor(private textService: TextService) {
    this.updateCurrentPageId(1);
  }

  ngOnInit() {
    this.textService.getText((text: any[]) => {
      this.pages = text;
    });
    console.log(this.currentPageId);
  }

  public updateCurrentPageId(pageId: number) {
    this.currentPageId = pageId;
  }

}
