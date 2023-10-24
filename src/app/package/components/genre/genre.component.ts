import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from '../../service/api.service';
import { Movie } from '../../api/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html'
})
export class GenreComponent implements OnInit {

  data: any
  movie: Movie[] = [];
  img: string;
  patch: string = '';
  pages = 1;
  loading = false;
  title: string = '';
  id: number;
  genres: { id: number, name: string }[] = [];
  configuration: any

  constructor(
    public layoutService: LayoutService,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      this.genreList();
      this.resetComponent();
    });
  }

  resetComponent() {
    this.movie = [];
    this.pages = 1;
    this.loading = false;
    this.loadMovie(this.pages, this.id);
    this.getConfiguration()
  }

  loadMovie(page, id) {
    if (!this.loading) {
      this.loading = true;
      this.api.tmdbApigenre(page, id).subscribe((data: any) => {
        this.data = data
        for (let i = 0; i < data.results.length; i++) {
          data.results[i].rate = data.results[i].vote_average / 2;
        }
        this.movie = this.movie.concat(data.results);
        this.pages = page;
        this.loading = false;
      });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (this.pages <= this.data.total_pages && scrollPosition >= documentHeight - 200 && !this.loading) {
      let nextPage = this.pages + 1;
      this.loadMovie(nextPage, this.id);
    }
  }

  genreList() {
    this.api.genreApi('en').subscribe((data: { genres: { id: number; name: string }[] }) => {
      this.genres = data.genres;
      for (let i = 0; i < this.genres.length; i++) {
        if (this.genres[i].id == this.id) {
          this.title = this.genres[i].name;
          break;
        }
      }
    });
  }

  getConfiguration() {
    this.api.config().subscribe(data => {
      this.configuration = data;
      this.img = this.configuration.images.secure_base_url + '/original/';
    });
  }

}
