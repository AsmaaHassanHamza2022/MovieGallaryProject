import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class 
NavbarComponent implements OnInit {

  isLogin:boolean=false;

  constructor(public _AuthService:AuthService,public _Router:Router,public _MoviesService:MoviesService ) {
   this._AuthService.currentUser.subscribe({
     next:(data)=>{
      if(data !=null){
        this.isLogin=true;
      }else{
        this.isLogin=false;
        // this._Router.navigate(['/login']);

      }
     }
   })

  
   

   }

  ngOnInit(): void {
  }
  LogoutNow(){
    this._AuthService.Logout();
  }

}
