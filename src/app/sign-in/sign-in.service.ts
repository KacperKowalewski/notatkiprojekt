import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface SignInResponseData{
    username: string;
}

@Injectable({providedIn: 'root'})
export class SignInService {
    constructor(private http: HttpClient){

    }
    login(username: string){
        return this.http.post<SignInResponseData>('http://localhost:3000/accounts',
        {
            username: username,
        }
        );
    }
}