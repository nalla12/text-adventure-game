import { Component, OnInit } from '@angular/core';
import { TextService } from "../services/text.service";

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  public story!: string;
  constructor(private textService: TextService) { }

  ngOnInit(): void {
  }

  storyId = 1;
  storyText = this.textService.getText();
}
