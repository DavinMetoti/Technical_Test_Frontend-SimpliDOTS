import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from '../../service/api.service';
import { Movie } from '../../api/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  data: any
  movie: Movie[] = [];
  img: string;
  patch: string = '';
  pages = 1;
  loading = false;
  title: string = '';
  keyword: string;
  configuration: any;

  constructor(
    public layoutService: LayoutService,
    private api: ApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.keyword = params['keyword'];
      this.title = params['keyword']
      this.resetComponent();
    });
  }

  resetComponent() {
    this.movie = [];
    this.pages = 1;
    this.loading = false;
    this.loadMovie(this.keyword, this.pages);
    this.getConfiguration()
  }

  loadMovie(keyword, page) {
    if (!this.loading) {
      this.loading = true;
      this.api.searchApi(keyword, page).subscribe((data: any) => {
        this.data = data;
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
      this.loadMovie(this.keyword, nextPage);
    }
  }

  getConfiguration() {
    this.api.config().subscribe(data => {
      this.configuration = data;
      this.img = this.configuration.images.secure_base_url + '/original/';
    });
  }

}
