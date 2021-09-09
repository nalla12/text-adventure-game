import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit {

  @Output() onChoiceClickEvent = new EventEmitter<number>();
  @Input() public choices?: any[];

  constructor() { }

  ngOnInit(): void {
  }

}
