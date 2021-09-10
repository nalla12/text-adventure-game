import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  private damage: number = 0;
  @Output() damageEvent = new EventEmitter<number>();
  @Output() onChoiceClickEvent = new EventEmitter<number>();
  @Input() public page?: any;

  constructor() { }

  ngOnInit() {
    this.damage = this.page.damage;

    if(this.damage) {
      console.log("Damage: " + this.damage);
      this.damageEvent.emit(this.damage);
    }
  }

}
