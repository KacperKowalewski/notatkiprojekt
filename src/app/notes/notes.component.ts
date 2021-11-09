import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  
  constructor() { }

  public show = false;
  public content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor tellus, finibus efficitur mattis at, malesuada eu quam. Phasellus imperdiet eu quam et congue.';
  

  ngOnInit(): void {
  }
  
}


