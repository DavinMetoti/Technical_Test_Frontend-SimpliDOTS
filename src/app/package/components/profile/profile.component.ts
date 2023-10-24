import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../api/movie';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  providers: [MessageService],

})
export class ProfileComponent implements OnInit {

  movieData: any;
  configuration: any
  data: any;
  movie: Movie[] = [];
  loading = false;
  pages = 1;
  title: string = '';
  id: number;
  img: string;


  constructor(
    public api: ApiService,
    private route: ActivatedRoute,
    private message: MessageService,
  ) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.resetComponent();
    });
  }

  detailProfile(id) {
    if (!this.loading) {
      this.loading = true;
      this.api.detailAccount(id).subscribe((account: any) => {
        this.data = account;
        console.log(this.data);

        this.loading = false;
      });
    }
  }

  loadMovie(page, id) {
    this.loading = true;
    this.api.getFavorit(page, id).subscribe((data: any) => {
      this.movieData = data
      for (let i = 0; i < data.results.length; i++) {
        data.results[i].rate = data.results[i].vote_average / 2;
      }
      this.movie = this.movie.concat(data.results);
      this.pages = page;
      console.log(this.movie);
      this.loading = false;
    });
  }

  resetComponent() {
    this.pages = 1;
    this.loading = false;
    this.detailProfile(this.id);
    this.loadMovie(this.pages, this.id);
    this.getConfiguration()
  }

  getConfiguration() {
    this.api.config().subscribe(data => {
      this.configuration = data;
      this.img = this.configuration.images.secure_base_url + '/original/';
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    if (this.pages <= this.movieData.total_pages && scrollPosition >= documentHeight - 200 && !this.loading) {
      let nextPage = this.pages + 1;
      this.loadMovie(nextPage, this.id);
    }
  }

  removeFavorit(idMovie) {

    const account = JSON.parse(localStorage.getItem('account'))
    const params = {
      media_type: "movie",
      media_id: idMovie,
      favorite: false
    }
    this.api.addFavorit(params, account.id).subscribe((result: any) => {
      this.message.add({
        severity: 'warn',
        summary: 'ATTENTION',
        detail: result.status_message
      });
      window.location.reload();
    }, (error: any) => {
      this.message.add({
        severity: 'error',
        summary: 'FAILED',
        detail: 'To add Favorit'
      })
    })

  }

}
