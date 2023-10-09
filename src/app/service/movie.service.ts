import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  favorit: any[] = [];

  constructor(
    public message: MessageService,
  ) {
    const storedFavorit = localStorage.getItem('favorit');
    if (storedFavorit) {
      this.favorit = JSON.parse(storedFavorit);
    }
  }

  addToFavorit(movie: any) {
    try {
      const existingMovieIndex = this.favorit.findIndex((m) => m.id === movie.id);

      if (existingMovieIndex === -1) {
        // Movie is not in favorit, add it
        this.favorit.push(movie);
        localStorage.setItem('favorit', JSON.stringify(this.favorit));

        this.message.add({
          severity: "success",
          summary: "SUCCESS",
          detail: "Movies have been added favorites",
        });
      } else {
        // Movie is already in favorit, remove it
        this.favorit.splice(existingMovieIndex, 1);
        localStorage.setItem('favorit', JSON.stringify(this.favorit));

        this.message.add({
          severity: "warn",
          summary: "ATTENTION",
          detail: "Movies have been removed favorites",
        });
      }
    } catch (error) {
      localStorage.setItem('favorit', "");
    }
  }


  cekfavorit(movie: any) {
    try {
      const movieExists = this.favorit.some((m) => m.id === movie.id);
      if (!movieExists) {
        return false
      } else {
        return true
      }
    } catch (error) {
      return false
    }
  }
}
