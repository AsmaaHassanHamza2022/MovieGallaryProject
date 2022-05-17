import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,BehaviorSubject} from 'rxjs';
import { UserData } from './user-data';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 // variable carry Login data

 currentUser=new BehaviorSubject<any>(null);

  constructor(private _HttpClient:HttpClient,public _Router:Router) {


    if(localStorage.getItem("curentUserData") !=null){

      
      this.currentUser.next(JSON.parse(localStorage.getItem('curentUserData')|| '{}') ) ;
    }

   }

 
  // registration method
  
  signUp(Data:any):Observable<any>{
    return this._HttpClient.post("http://localhost:8080/register",Data);
  }

  //login method

  Login(Data:any):Observable<any>{
    return this._HttpClient.post("http://localhost:8080/login",Data);
  }


  //  save current user


  SaveCurrentUser(user:UserData){
    // let myUser=new UserData(user.First_name,user.Last_name,user.Email,user.Password);

    localStorage.setItem("curentUserData",JSON.stringify(user));

    this.currentUser.next(user);
  }


  //logout method

  Logout(){
    this.currentUser.next(null);
    localStorage.setItem("curentUserData","null")
    this._Router.navigate(['/login']);
    
  }

}
