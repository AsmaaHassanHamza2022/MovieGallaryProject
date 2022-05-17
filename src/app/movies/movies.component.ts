import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  allMovies:any=[];
  posterPrefix:string="https://image.tmdb.org/t/p/w500";

  constructor(public _MoviesService:MoviesService) { 
    _MoviesService.getAllData('movie').subscribe({
      next:(data)=>{
        this.allMovies=data.results;
         
      }
    })
  }

  ngOnInit(): void {
  }

}
