import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OmbdApiService } from '../../services/ombd-api.service';
import { IOMBDResponse2 } from '../../omdbresponse2';

@Component({
  selector: 'app-search',
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private _ombdService:OmbdApiService){}
  movieData:IOMBDResponse2 | undefined;
  currentPage = 1;
  maxPages = 0;
  errorMessage:any;

  getMovieDetails(movieName:string): boolean {
    this._ombdService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._ombdService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._ombdService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }
}
