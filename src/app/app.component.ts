import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(){ }

  ngOnInit() {}

  onEditNote(noteData: {title: string, content: string}){
    
  }
//  noteElements = [{type: 'id', name: 'Testserver', content: 'Just a test!'}];
// public notes:{id:string, accountId: string, title: string, content: string, createTime: Date, lastEditTime: Date}[];
}


