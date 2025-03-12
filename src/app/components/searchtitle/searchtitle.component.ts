import { Component } from '@angular/core';
import { OmbdApiService } from '../../services/ombd-api.service';
import { IOMBDResponse } from '../../ombdresponse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  constructor(private _ombdService:OmbdApiService){}
  movieData:IOMBDResponse | undefined;
  errorMessage:any;
  getMovieDetails(movieName:string): boolean {
    this._ombdService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }
}