import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie/movie';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MovieService {

  // inject HttpClient service
  constructor(private client: HttpClient) { }

  movieUrl = 'http://localhost:8080/MoviesAppRest/api/movie/list_movies';
  
  // get movies
  getMovies():Observable<Movie[]>{
    // returns observable of type array
    return this.client.get<Movie[]>(this.movieUrl);
  }

}
