import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IOMBDResponse } from './ombdresponse';
import { OmbdApiService } from './services/ombd-api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movie-finder';
  movieData:IOMBDResponse | undefined;
  errorMessage:any

  constructor(private _ombdService:OmbdApiService){}

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
