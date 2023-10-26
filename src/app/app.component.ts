import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }

    ngOnInit() {
        this.primengConfig.ripple = true;
        const defaultLang = {
            iso_639_1: "en",
            english_name: "English",
            name: "English"
        }
        const language = localStorage.getItem('language')
        if (!language) {
            localStorage.setItem('language', JSON.stringify(defaultLang))
        }
    }
}
