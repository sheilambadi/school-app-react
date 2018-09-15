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
  movieData;

  constructor(private route: ActivatedRoute, private service: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // console.log(params.get('movieId'));
       this.id = params.get('movieId');
       // let no = params.get('movieId');

       this.service.getMovieById(this.id).subscribe(data => {
        // console.log('Movie data: ' + data);
        this.movieData = data;
        this.movieName = this.movieData.movieName;
        this.movieYear = this.movieData.movieYear;
        this.movieSynopsis = this.movieData.movieSynopsis;
      });
    });

    // console.log(this.id);

    // this.service.getMovieById(45).subscribe(data => {
    //   console.log('Movie data: ' + data);
    // });
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
