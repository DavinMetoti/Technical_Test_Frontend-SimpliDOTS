import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { ApiService } from '../package/service/api.service';
import { UpperCasePipe } from '@angular/common';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];
    genres: { id: number, name: string }[] = [];
    language: any;

    constructor(
        public layoutService: LayoutService,
        private api: ApiService
    ) { }

    ngOnInit() {
        this.language = JSON.parse(localStorage.getItem('language'))
        this.api.genreApi(this.language).subscribe((data: { genres: { id: number; name: string }[] }) => {
            this.genres = data.genres;
            this.buildMenu();
        });
    }

    buildMenu() {

        if (this.language.iso_639_1 == 'id') {
            this.model = [
                {
                    label: 'KATEGORI',
                    items: [
                        { label: 'SEDANG TAYANG', routerLink: ['/list/category/now_playing'] },
                        { label: 'POPPOPULER', routerLink: ['/list/category/popular'] },
                        { label: 'SEGERA', routerLink: ['/list/category/upcoming'] },
                    ]
                },
                {
                    label: 'GENRE',
                    items: this.genres.map(genre => {
                        return {
                            label: new UpperCasePipe().transform(genre.name),
                            routerLink: ['/list/genre', genre.id]
                        };
                    })
                },
            ];
        } else {
            this.model = [
                {
                    label: 'CATEGORY',
                    items: [
                        { label: 'NOW PLAYING', routerLink: ['/list/category/now_playing'] },
                        { label: 'POPULAR', routerLink: ['/list/category/popular'] },
                        { label: 'UPCOMING', routerLink: ['/list/category/upcoming'] },
                    ]
                },
                {
                    label: 'GENRES',
                    items: this.genres.map(genre => {
                        return {
                            label: new UpperCasePipe().transform(genre.name),
                            routerLink: ['/list/genre', genre.id]
                        };
                    })
                },
            ];
        }
    }
}
