import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
  })
export class SignInComponent implements OnInit {

  public signInForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      username:['']
    })
  }
  
  signin(){
    this.http.get<any>('http://localhost:3000/accounts')
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.username === this.signInForm.value.username
      });
      if(user){
        alert("Zalogowaleś się!");
        this.signInForm.reset();
        this.router.navigate(['notes']);
      }else{
        alert("Nie ma użytkownika o podanej nazwie");
      }
    },err=>{
      alert("Coś poszło nie tak");
    })
  }

   onSubmit() {
    
  
  }
}
