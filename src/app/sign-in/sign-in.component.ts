import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Observable } from 'rxjs';

import { SignInResponseData, SignInService } from './sign-in.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
  })
export class SignInComponent implements OnInit {

  constructor(private signInService: SignInService) { }

  ngOnInit(): void {
  }
  
   onSubmit(form: NgForm) {
    const username = form.value.username;
    let loginObs: Observable<SignInResponseData>;

    loginObs = this.signInService.login(username);

    loginObs.subscribe(
      resData => {
        console.log(resData);
      }
    )
    form.reset;
    
  }
}
