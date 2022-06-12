import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-control',
  templateUrl: './track-control.component.html',
  styleUrls: ['./track-control.component.css']
})
export class TrackControlComponent implements OnInit {

  constructor() { }
public displayedColumns: string[] = ['name', 'description', 'actions'];
public tracks: any[] = [
  {
    "name": "Company1",
    "description": "12/01/2022 12:00:00 AM",
  },
  {
    "name": "Company2",
    "description": "12/01/2022 12:00:00 AM",
  },
  {
    "name": "Company2",
    "description": "12/01/2022 12:00:00 AM",
  }]

  public addTrack() {
    console.log("add track");
  }

  public onEdit(track:any): void {  
    console.log("edit");
  }

  ngOnInit(): void {
  }

}
