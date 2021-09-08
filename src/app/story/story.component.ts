import { Component, OnInit } from '@angular/core';
import { TextService } from "../services/text.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  public story?: any[];

  constructor(private textService: TextService) { }

  ngOnInit() {
    this.textService.getText((text: any[]) => {
      this.story = text[0].story;
    });
  }
}
