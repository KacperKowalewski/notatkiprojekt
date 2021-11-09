import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { singUpService } from './sing-up.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private singUpService: singUpService) { 

  }


  ngOnInit(): void {
  }
  public admin: boolean = false;

  onSubmit(form: NgForm) {
    const username = form.value.username;

    this.singUpService.singup(username, this.admin).subscribe(resData => {
      console.log(resData);
    });

    form.reset;
}
}
