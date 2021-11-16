import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { signUpService } from './sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signUpService: signUpService, private router: Router) { 

  }


  ngOnInit(): void {
  }
  public admin: boolean = false;

  onSubmit(form: NgForm) {
    const username = form.value.username;

    this.signUpService.singup(username, this.admin).subscribe(resData => {
      alert("Użytkownik dodany!");
      this.router.navigate(['sing-in']);
    },err => {
      alert("Coś poszło nie tak");
    });

    form.reset;
}
}
