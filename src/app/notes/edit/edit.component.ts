import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public title: string = 'Testowa notatka';
  public content: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dolor tellus, finibus efficitur mattis at, malesuada eu quam. Phasellus imperdiet eu quam et congue.';
  onEditNote(noteData: {title: string, content: string}){
    console.log(noteData);
  }
}
