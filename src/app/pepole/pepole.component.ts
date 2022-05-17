import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-pepole',
  templateUrl: './pepole.component.html',
  styleUrls: ['./pepole.component.scss']
})
export class PepoleComponent implements OnInit {
  allPeoples:any=[];
  posterPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(public _MoviesService:MoviesService) {
    _MoviesService.getAllData('person').subscribe({
      next:(data)=>{
        this.allPeoples=data.results;
         
      }
    })
   }

  ngOnInit(): void {
  }

}
