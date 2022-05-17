import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import{AuthService} from '../auth.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  LoginErrorMassage:string='';
  flag:boolean=false;
  
  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }

  LoginForm=new FormGroup({
    Email:new FormControl(null,[Validators.required]),
    Password:new FormControl(null,[Validators.required]),
  })

  LoginNow(data:any){

    this._AuthService.Login(data).subscribe({
      next:(data)=>{
        if(data.message=="Success"){
          this._AuthService.SaveCurrentUser(data.data);

          this._Router.navigate(['/home']);
        }else{

          this.flag=true;
          this.LoginErrorMassage=data.message;
          console.log(this.LoginErrorMassage)

        }
      }
    })

  }

}
