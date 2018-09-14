import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './services/movie.service';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
