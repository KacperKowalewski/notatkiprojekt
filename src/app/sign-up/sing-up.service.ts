import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface singUpResponseData{
    id: string;
    username: string;
    admin: string;
}

@Injectable({providedIn: 'root'})
export class singUpService {
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