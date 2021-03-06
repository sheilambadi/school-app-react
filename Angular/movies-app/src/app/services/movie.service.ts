import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../movie/movie';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class MovieService {

  // inject HttpClient service
  constructor(private client: HttpClient) { }

  movieUrl = 'http://localhost:8080/MoviesAppRest/api/movie/list_movies';
  postMovieUrl = 'http://localhost:8080/MoviesAppRest/api/movie/create_movie';
  updateMovieUrl = 'http://localhost:8080/MoviesAppRest/api/movie/update_movie/';
  movieById = 'http://localhost:8080/MoviesAppRest/api/movie/movie_id/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  
  // get movies
  getMovies(): Observable<Movie[]> {
    // returns observable of type array
    return this.client.get<Movie[]>(this.movieUrl);
  }

  postMovies(movie: Movie): Observable<Movie> {
    return this.client.post<Movie>(this.postMovieUrl, movie, this.httpOptions);
  }

  // update movie
  updateMovie(id, movie: Movie): Observable<Movie> {
    return this.client.put<Movie>(this.updateMovieUrl + id, movie, this.httpOptions);
  }

  // get movie by id
  getMovieById(id): Observable<Movie> {
    return this.client.get<Movie>(this.movieById + id);
  }

}
