import { Component, OnInit, HostListener } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { ApiService } from '../../service/api.service';
import { Movie } from '../../api/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {

    data: any
    movie: Movie[] = [];
    img: string;
    patch: string = '';
    pages = 1;
    loading = false;
    title: string;
    configuration: any;
    language: any;


    constructor(
        public layoutService: LayoutService,
        private api: ApiService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.language = JSON.parse(localStorage.getItem('language'))
        this.route.params.subscribe(params => {
            const category = params['category'];

            if (category === 'now_playing') {
                this.patch = category;
                if (this.language.iso_639_1 == 'id') {
                    this.title = 'SEDANG TAYANG'
                } else {
                    this.title = 'NOW PLAYING'
                }
            } else if (category === 'popular') {
                this.patch = category;
                if (this.language.iso_639_1 == 'id') {
                    this.title = 'POPULER'
                } else {
                    this.title = 'PUPULAR'
                }
            } else if (category === 'upcoming') {
                this.patch = category;
                if (this.language.iso_639_1 == 'id') {
                    this.title = 'SEGERA TAYANG'
                } else {
                    this.title = 'UP COMING'
                }
            }

            this.resetComponent();
        });
    }

    resetComponent() {
        this.getConfiguration()
        this.movie = [];
        this.pages = 1;
        this.loading = false;
        this.loadMovie(this.pages);
    }

    loadMovie(page) {
        let url = this.patch;
        if (!this.loading) {
            this.loading = true;
            this.api.tmdbApi(url, page).subscribe((data: any) => {
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
            this.loadMovie(nextPage);
        }
    }

    getConfiguration() {
        this.api.config().subscribe(data => {
            this.configuration = data;
            this.img = this.configuration.images.secure_base_url + 'w342/';
        });
    }
}
