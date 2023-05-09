import { Injectable } from '@angular/core';
import { User } from './user.model';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  userOne:any;
  newUser:User = {
    fullName:'',
    email:'',
    password:''

  }
  constructor(private http:HttpClient){}
    postUser(user:User,form:any):Observable<any> {
      console.log("user  = ",JSON.stringify(user));
      console.log("datatype of user => ",typeof(user));
       return this.http.post('http://localhost:4000/api/register',user);
      //environment.apiBaseUrl+'/register'
    }  
}



