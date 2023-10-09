import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allMovie: any[] = [];
  urlImg = "https://image.tmdb.org/t/p/original/";
  favorit: any[] = [];
  loading = false;
  keyword: any

  constructor(
    private api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadData();
    this.allMovie = [];
  }

  loadData() {
    if (!this.loading) {
      this.loading = true;
      this.api.getMovies().then(
        (data: any) => {
          for (let i = 0; i < data.results.length; i++) {
            data.results[i].rate = data.results[i].vote_average / 2;
          }
          this.allMovie = this.allMovie.concat(data.results);
          this.loading = false;
        }
      );
    }
  }

  loadSearch(key: any) {
    if (!this.loading) {
      this.loading = true;
      this.api.searchMovie(key).then(
        (data: any) => {
          for (let i = 0; i < data.results.length; i++) {
            data.results[i].rate = data.results[i].vote_average / 2;
          }
          this.allMovie = this.allMovie.concat(data.results);
          this.loading = false;
        }
      );
    }
  }

  detailRoute(data: any) {
    console.log(data);
    this.router.navigate(['/detail']);
    localStorage.setItem('detail', JSON.stringify(data));
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Load more data when the user has scrolled to the bottom
    if (scrollPosition >= documentHeight - 200 && !this.loading) {
      this.loadData();
    }
  }

  search(key: string) {
    console.log(key);

    if (key == '') {
      this.ngOnInit()
    }
    else {
      this.searchMovie(key)
    }
  }

  searchMovie(key: string) {
    this.api.searchMovie(key).then(
      (result: any) => {
        this.allMovie = [];
        this.allMovie = result.results
      }
    )
  }

  genreMovie(key: number) {
    this.api.genreMovie(key).then(
      (result: any) => {
        this.allMovie = [];
        this.allMovie = result.results
      }
    )
  }
}
