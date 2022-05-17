import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-media-details',
  templateUrl: './media-details.component.html',
  styleUrls: ['./media-details.component.scss']
})
export class MediaDetailsComponent implements OnInit {
 
  MovieDetails:any=[];
  type:any='';
  id:any=0;
  posterPrefix:string="https://image.tmdb.org/t/p/w500";


  constructor(public _ActivatedRoute:ActivatedRoute ,public _MoviesService:MoviesService) {

    this.type=this._ActivatedRoute.snapshot.paramMap.get('type');
    this.id=this._ActivatedRoute.snapshot.paramMap.get('id');

    this._MoviesService.getMediaDetails(this.type,this.id).subscribe({
      next:(data)=>{
        this.MovieDetails=data;
      }
    })
   }

  ngOnInit(): void {
  }

}
