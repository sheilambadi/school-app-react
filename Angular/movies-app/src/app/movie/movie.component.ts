import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  public movies = [];

  constructor(private service: MovieService) {
  }

  ngOnInit() {
    this.service.getMovies().subscribe(data => {
      this.movies = data;
      // console.log(this.movies);
    });
  }

}
