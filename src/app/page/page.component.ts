import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HealthService} from "../services/health.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  public damage?: number;
  public healing?: number;
  @Output() onChoiceClickEvent = new EventEmitter<number>();
  @Input() public page?: any;
  @Input() public enableChoices?: boolean;

  constructor(public healthService: HealthService) { }

  ngOnInit() {
    this.damage = this.page.damage;
    this.healing = this.page.healing;

    if(this.damage) {
      console.log("Damage: " + this.damage);
      this.healthService.decreaseHp(this.damage);
    }

    if(this.healing) {
      console.log("Healing: " + this.healing);
      this.healthService.increaseHp(this.healing);
    }

    if(this.page.id == 1) {
      this.healthService.resetHp();
    }

    console.log("HP: " + this.healthService.Hp);
    console.log("This page id: " + this.page.id);
  }

  public onChoiceClick(id: number) {
    this.onChoiceClickEvent.emit(id);
  }

}
