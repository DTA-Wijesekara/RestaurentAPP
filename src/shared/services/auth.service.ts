import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string ="http://localhost:3000";

  constructor() { }

  async authenticate(email:string,password:string){
    const data = await fetch(this.baseUrl + "/users");
    console.log(await data.json());
  }
}
