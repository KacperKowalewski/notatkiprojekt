import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class signUpService {
    constructor(private http: HttpClient){

    }
    singup(username: string, admin: boolean){
        return this.http.post('http://localhost:3000/accounts',
        {
            username: username,
            admin: admin,
        }
        );
    }
}