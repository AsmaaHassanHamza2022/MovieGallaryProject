import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  allTv:any=[];
  posterPrefix:string="https://image.tmdb.org/t/p/w500";
  constructor(public _MoviesService:MoviesService) {
    _MoviesService.getAllData('tv').subscribe({
      next:(data)=>{
        this.allTv=data.results;
         
      }
    })
   }

  ngOnInit(): void {
  }

}
