import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allMovies:any=[];
  allTv:any=[];
  allPeoples:any=[];
  posterPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(public _MoviesService:MoviesService) {

    _MoviesService.getAllData('movie').subscribe({
      next:(data)=>{
        this.allMovies=data.results.slice(0,11);
         
      }
    })
    _MoviesService.getAllData('tv').subscribe({
      next:(data)=>{
        this.allTv=data.results.slice(0,11);
         
      }
    })
    _MoviesService.getAllData('person').subscribe({
      next:(data)=>{
        this.allPeoples=data.results.slice(0,11);
         
      }
    })

   }

  ngOnInit(): void {
  }


}
