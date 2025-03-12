import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from "rxjs";
import { IOMBDResponse } from "../ombdresponse";
import { IOMBDResponse2 } from '../omdbresponse2';


@Injectable({
  providedIn: 'root'
})
export class OmbdApiService {
  //https://www.omdbapi.com/?i=tt3896198&apikey=bfaba5c6
  private _siteURL="https://www.omdbapi.com/";
  private _key="?apikey=bfaba5c6&t=";
  private _key2="?apikey=bfaba5c6&s=";

  constructor (private _http:HttpClient){}

  getMovieData(movieName:string):Observable<IOMBDResponse> {
    return this._http.get<IOMBDResponse>(this._siteURL+this._key + movieName).pipe(
      tap(data=> console.log("Moviedata/error" + JSON.stringify(data))
    ),
    catchError(this.handleError)
  );
  }

  private handleError(err:HttpErrorResponse){
    console.log("OMBDApiService:"+ err.message);
    return throwError(()=> new Error("OMBDApiService:"+ err.message)) 
  }

  getMoviesData(movieName:string, page:number):Observable<IOMBDResponse2> {
    return this._http.get<IOMBDResponse2>(this._siteURL+ this._key2 + movieName + "&page=" + page)
    .pipe(
      tap(data => console.log('Moviedata/error' + JSON.stringify(data))
    ),
    catchError(this.handleError)
    );
  }
}
