import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from '../../service/api.service';
import { MovieDetail } from '../../api/moviedetail';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  providers: [DatePipe, MessageService],
})
export class DetailComponent implements OnInit {

  data: any
  movie: MovieDetail;
  img: string;
  patch: string = '';
  pages = 1;
  loading = false;
  title: string = '';
  id: number;
  genres: { id: number, name: string }[] = [];
  configuration: any;
  recommend = [];
  visible = false

  constructor(
    public layoutService: LayoutService,
    private api: ApiService,
    private route: ActivatedRoute,
    private message: MessageService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.resetComponent();
    });
  }

  loadMovie(id) {
    if (!this.loading) {
      this.loading = true;
      this.api.movieDetail(id).subscribe((data: any) => {
        this.movie = data;
        this.movie.rate = this.movie.vote_average / 2
        this.loading = false;
      });
    }
  }

  resetComponent() {
    this.pages = 1;
    this.loading = false;
    this.loadMovie(this.id);
    this.getConfiguration()
    this.getRecommendations(this.id, this.pages)
  }

  getConfiguration() {
    this.api.config().subscribe(data => {
      this.configuration = data;
      this.img = this.configuration.images.secure_base_url + '/original/';
    });
  }

  getRecommendations(id, page) {
    this.loading = true;
    this.api.recommendations(id, page).subscribe((res: any) => {
      this.data = res
      for (let i = 0; i < res.results.length; i++) {
        res.results[i].rate = res.results[i].vote_average / 2;
      }
      this.recommend = this.recommend.concat(res.results);
      this.pages = page;
      this.loading = false;
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (this.pages <= this.data.total_pages && scrollPosition >= documentHeight - 200 && !this.loading) {
      let nextPage = this.pages + 1;
      this.getRecommendations(this.id, nextPage);
    }
  }

  addFavorit(idMovie) {

    const account = JSON.parse(localStorage.getItem('account'))
    const params = {
      media_type: "movie",
      media_id: idMovie,
      favorite: true
    }

    if (account == undefined) {
      this.visible = true
    } else {
      this.api.addFavorit(params, account.id).subscribe((result: any) => {
        this.message.add({
          severity: 'success',
          summary: 'SUCCESS',
          detail: result.status_message
        })
      }, (error: any) => {
        this.message.add({
          severity: 'error',
          summary: 'FAILED',
          detail: 'To add Favorit'
        })
      })
    }

  }

  openWebsite(url) {
    if (url) {
      window.open(url, '_blank');
    }
  }

}
