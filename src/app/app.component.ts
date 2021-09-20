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
  public isGameOver = false;

  constructor(private textService: TextService, private healthService: HealthService) {
    this.updateCurrentPageId(1);
  }

  ngOnInit() {
    this.textService.getText((value: any[]) => {
      this.pages = value;
    });

    this.healthService.onHpUpdateEvent.subscribe(hp => {
      if (this.healthService.Hp <= 0) {
        this.isGameOver = true;
      }
    });
  }

  public updateCurrentPageId(pageId: number) {
    this.currentPageId = pageId;
  }

  public reset() {
    this.healthService.resetHp();
    this.currentPageId = 1;
    this.isGameOver = false;
  }
}
