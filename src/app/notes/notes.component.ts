import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Note } from './note.model';


@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  
  notes: Note[] = []
  
  constructor(private http: HttpClient) { 
    
  }
  
  show(){
    
  }
  

  

  ngOnInit(): void {
    this.http.get('http://localhost:3000/notes').subscribe((notes: any) => {
      console.log('notes', notes)
      this.notes = notes
    })
  }
  
}


