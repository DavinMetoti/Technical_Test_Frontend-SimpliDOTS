import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';
import { Location, PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  search_btn = false;
  navbar = false;
  movieGenres = [
    { id: 28, genre: 'Action' },
    { id: 12, genre: 'Adventure' },
    { id: 16, genre: 'Animation' },
    { id: 35, genre: 'Comedy' },
    { id: 80, genre: 'Crime' },
    { id: 99, genre: 'Documentary' },
    { id: 18, genre: 'Drama' },
    { id: 10751, genre: 'Family' },
    { id: 14, genre: 'Fantasy' },
    { id: 36, genre: 'History' },
    { id: 27, genre: 'Horror' },
    { id: 10402, genre: 'Music' },
    { id: 9648, genre: 'Mystery' },
    { id: 10749, genre: 'Romance' },
    { id: 878, genre: 'Science Fiction' },
    { id: 10770, genre: 'TV Movie' },
    { id: 53, genre: 'Thriller' },
    { id: 10752, genre: 'War' },
    { id: 37, genre: 'Western' }
  ];

  actived: any = {
    id: null,
    genre: ''
  }

  constructor(
    public dashboard: DashboardComponent,
    public route: Router,
    private location: Location,
    private platformLocation: PlatformLocation
  ) {

  }

  ngOnInit() {
    this.getCurrentUrl() == "/dashboard" ? this.search_btn = false : this.search_btn = true;
  }

  home() {
    this.navbar = !this.navbar
    this.actived = { id: null, genre: '' }
    this.route.navigate(['/dashboard']);
    this.dashboard.loadData()
  }

  getCurrentUrl(): string {
    const fullUrl = this.location.path();
    const pathOnly = this.platformLocation.pathname;
    return fullUrl;
  }

  navbarclass() {
    this.navbar = !this.navbar
  }

  checkActived(genre: any) {
    if (this.getCurrentUrl() == "/dashboard") {
      this.route.navigate(['/dashboard']);
    }
    this.navbar = !this.navbar
    this.dashboard.genreMovie(genre.id)
    this.actived = { ...genre }
  }
}
