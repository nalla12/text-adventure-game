import {Component, OnInit} from '@angular/core';
import {TextService} from "./services/text.service";
import {HealthService} from "./services/health.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public currentPageId: number = 0;
  public pages?: any[];

  constructor(private textService: TextService, private healthService: HealthService) {
    this.updateCurrentPageId(1);
  }

  ngOnInit() {
    this.textService.getText((value: any[]) => {
      this.pages = value;
    });
  }

  public updateCurrentPageId(pageId: number) {
    this.currentPageId = pageId;

    if(this.currentPageId == 1) {
      this.healthService.resetHp();
      console.log('Page ID: ' + this.currentPageId + ', HP: ' + this.healthService.Hp);
    }
  }

  public updateCurrentHealth(damage: number) {
    if(damage) {
      this.healthService.calcHp(damage);
    }
    console.log("Current HP:" + this.healthService.Hp);
  }
}
