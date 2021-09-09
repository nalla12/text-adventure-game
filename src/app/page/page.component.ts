import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  @Output() onChoiceClickEvent = new EventEmitter<number>();
  @Input() public page?: any;

  constructor() { }

  ngOnInit() { }

}
