import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  mediaType:string='';

  constructor(private _HttpClient:HttpClient) { }


  // get All Data
getAllData(mediaType:string):Observable<any>{
  return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=64ab6b3f1495cff6ce3528e490f995d5`);
}


// get media details

getMediaDetails(mediaType:string,id:number):Observable<any>{

  return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=64ab6b3f1495cff6ce3528e490f995d5&language=en-US`)
}
}



