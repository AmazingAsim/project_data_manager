import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login,LoginResult } from '../model/login';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment'

interface Result{
  res:string
}




@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

// adduser method to signin

private url=environment.SERVER_URL;

  adduser(body:User):Observable<Result>{
    let bodyjson=JSON.stringify(body)
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
      });
  let options = { headers: headers };
   return this.http.post<Result>(this.url+'/api/adduser',bodyjson,options)

  }

// login method

login(body:Login):Observable<LoginResult>{
  let bodyjson=JSON.stringify(body)
  let headers = new HttpHeaders({
    'Content-Type': 'application/json'
    });
let options = { headers: headers };
 return this.http.post<LoginResult>(this.url+'/api/login',bodyjson,options)
}

}
