import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-log-control',
  templateUrl: './track-log-control.component.html',
  styleUrls: ['./track-log-control.component.css']
})
export class TrackLogControlComponent implements OnInit {

  constructor() { }
  public checkpoints: any[] = [
    {
      "Date": "Date 1",
      "Place": "Place 1",
      "Action": "Action 1",
      "Type": "Milestone"
    },
    {
      "Date": "Date 2",
      "Place": "Place 2",
      "Action": "Action 2",
      "Type": "Milestone"
    },
    {
      "Date": "Date 3",
      "Place": "Place 3",
      "Action": "Action 3",
      "Goal": true
    }]
  ngOnInit(): void {
  }

}
