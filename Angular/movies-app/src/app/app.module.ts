import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './services/movie.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent,
    AddmovieComponent,
    UpdateMovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
         component: AddmovieComponent
      },
      {
        path: 'movies/:movieId',
        component: UpdateMovieComponent
      },
      {
        path: 'movies',
        component: MovieComponent
      }
    ])
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
