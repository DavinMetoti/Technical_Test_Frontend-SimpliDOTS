import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from "./service/app.layout.service";
import { ApiService } from '../package/service/api.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent implements OnInit {

    items!: MenuItem[];
    keyword: string;
    isLogin = false;
    languages = [];
    selectedLanguage = {
        iso_639_1: "",
        english_name: "",
        name: ""
    }

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public layoutService: LayoutService,
        public api: ApiService,
        public route: Router,
    ) { }

    ngOnInit() {
        const requestToken = localStorage.getItem('accessToken')
        if (requestToken) {
            this.isLogin = true;
        } else {
            this.isLogin = false;
        }
        this.getLanguage()
    }


    changeTheme(theme: string, colorScheme: string) {
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const newHref = themeLink.getAttribute('href')!.replace(this.layoutService.config.theme, theme);
        this.layoutService.config.colorScheme
        this.replaceThemeLink(newHref, () => {
            this.layoutService.config.theme = theme;
            this.layoutService.config.colorScheme = colorScheme;
            this.layoutService.onConfigUpdate();
        });
    }

    replaceThemeLink(href: string, onComplete: Function) {
        const id = 'theme-css';
        const themeLink = <HTMLLinkElement>document.getElementById('theme-css');
        const cloneLinkElement = <HTMLLinkElement>themeLink.cloneNode(true);

        cloneLinkElement.setAttribute('href', href);
        cloneLinkElement.setAttribute('id', id + '-clone');

        themeLink.parentNode!.insertBefore(cloneLinkElement, themeLink.nextSibling);

        cloneLinkElement.addEventListener('load', () => {
            themeLink.remove();
            cloneLinkElement.setAttribute('id', id);
            onComplete();
        });
    }

    searchMovie(key: string) {
        this.api.redirectSearch(key)
    }

    login() {
        this.api.requestToken().subscribe((requestToken: string) => {
            const authUrl = `${environment.baseUrl}/authenticate/${requestToken}?redirect_to=${window.location.origin}`;
            localStorage.setItem('accessToken', requestToken)
            window.location.href = authUrl;
            this.getSession
        });
    }

    getSession() {
        const requestToken = localStorage.getItem('accessToken');
        this.api.createSessionID(requestToken).subscribe(
            (response: any) => {
                this.api.getAccount(response.session_id).subscribe(
                    (accountResponse: any) => {
                        localStorage.setItem('account', JSON.stringify(accountResponse));
                        this.route.navigate(['/detail/profile/' + accountResponse.id])
                        this.isLogin = true;
                    }
                );
            },
            (error) => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('account');
                this.isLogin = false;
            }
        );
    }

    profile() {
        const account = JSON.parse(localStorage.getItem('account'))
        if (!account) {
            this.getSession()
            this.route.navigate(['/detail/profile/' + account.id])
        } else {
            this.route.navigate(['/detail/profile/' + account.id])
        }
    }

    logout() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('account');
        this.isLogin = false;
        window.location.reload();
    }

    getLanguage() {
        this.api.languageApi().subscribe((languageResponse: any) => {
            this.languages = languageResponse;
            const selectedLanguage = JSON.parse(localStorage.getItem('language'));
            if (selectedLanguage) {
                this.selectedLanguage = selectedLanguage;
            }
        });
    }

    setlanguage(params) {
        localStorage.setItem('language', JSON.stringify(params));
        window.location.reload()
    }




}
