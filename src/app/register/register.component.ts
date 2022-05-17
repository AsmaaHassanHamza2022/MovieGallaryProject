import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import{AuthService} from '../auth.service';
import{Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }



  RegisterForm=new FormGroup({
    First_name:new FormControl(null,[Validators.required]),
    Last_name:new FormControl(null,[Validators.required]),
    Email:new FormControl(null,[Validators.required]),
    Password:new FormControl(null,[Validators.required]),
  })


// register method
RegisterNow(registerdata:any){
  this. _AuthService.signUp(registerdata).subscribe({
    next:(data)=>{
      alert(data.massage);
      this. _Router.navigate(['/login']);

    }
  })
}


}
