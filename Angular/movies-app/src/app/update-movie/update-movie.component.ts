import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  movieName;
  movieYear;
  movieSynopsis;
  movieBody;
  id;

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('movieId'));
       this.id = params.get('movieId');
    });
  }

  updateMovie() {
    this.movieBody = {
      movieName: this.movieName,
      movieYear: this.movieYear,
      movieSynopsis: this.movieSynopsis
    };
    // console.log(this.movieBody);

    this.service.updateMovie(this.id, this.movieBody).subscribe(
      movie => {
        console.log(movie);
      }
    );
  }



}
