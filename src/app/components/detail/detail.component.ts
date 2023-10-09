import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  movie: string = localStorage.getItem('detail') || '';
  detail: any;
  urlImg = "https://image.tmdb.org/t/p/original/";
  isFavorit = false;
  movieGenres: { [id: number]: string } = {
    28: 'Action',
    12: 'Adventure',
    16: 'Animation',
    35: 'Comedy',
    80: 'Crime',
    99: 'Documentary',
    18: 'Drama',
    10751: 'Family',
    14: 'Fantasy',
    36: 'History',
    27: 'Horror',
    10402: 'Music',
    9648: 'Mystery',
    10749: 'Romance',
    878: 'Science Fiction',
    10770: 'TV Movie',
    53: 'Thriller',
    10752: 'War',
    37: 'Western'
  };

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit() {
    this.detail = JSON.parse(this.movie);
    this.isFavorit = this.movieService.cekfavorit(this.detail)
  }

  getGenreName(genreId: number): string {
    return this.movieGenres[genreId] || 'Unknown Genre';
  }

  favorit() {
    this.movieService.addToFavorit(this.detail)
    this.ngOnInit()
  }

}
