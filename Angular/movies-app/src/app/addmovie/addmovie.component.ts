import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {
  movieName;
  movieYear;
  movieSynopsis;
  movieBody;

  constructor(private service: MovieService) { }

  ngOnInit() {
  }

  submitMovie() {
    this.movieBody = {
      movieName: this.movieName,
      movieYear: this.movieYear,
      movieSynopsis: this.movieSynopsis
    };

    // console.log(this.movieBody);
    this.service.postMovies(this.movieBody).subscribe(
      movie => {
        console.log(movie);
      }
    );
  }

}
