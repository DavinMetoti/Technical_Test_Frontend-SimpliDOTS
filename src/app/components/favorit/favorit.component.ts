import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-favorit',
  templateUrl: './favorit.component.html',
  styleUrls: ['./favorit.component.scss']
})
export class FavoritComponent implements OnInit {

  allMovie: any
  movie: string | undefined
  urlImg = "https://image.tmdb.org/t/p/original/";

  constructor(
    public router: Router,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
    this.movie = localStorage.getItem('favorit') || '';
    this.allMovie = JSON.parse(this.movie)
  }

  detailRoute(data: any) {
    this.router.navigate(['/detail']);
    localStorage.setItem('detail', JSON.stringify(data));
  }

  favorit(data: any) {
    this.movieService.addToFavorit(data)
    this.ngOnInit()
  }

}
