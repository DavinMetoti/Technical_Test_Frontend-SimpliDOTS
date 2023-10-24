import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + environment.accessKey
    })
  };

  keyword: string;
  selectedLanguage = JSON.parse(localStorage.getItem('language'));

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
    this.selectedLanguage = JSON.parse(localStorage.getItem('language')) || {
      iso_639_1: "en",
      english_name: "English",
      name: "English"
    };
  }

  tmdbApi(patch: string, page: number): Observable<any[]> {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/movie/${patch}?language=${this.selectedLanguage.iso_639_1}&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  tmdbApigenre(page: number, id: number): Observable<any[]> {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/discover/movie?page=${page}&sort_by=popularity.desc&with_genres=${id}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  genreApi(language): Observable<{ genres: { id: number; name: string }[] }> {
    return this.http.get<{ genres: { id: number; name: string }[] }>(`${environment.defaultUrl}/${environment.v3}/genre/movie/list?language=${language.iso_639_1}`, this.httpOptions);
  }

  languageApi(): Observable<{ genres: { id: number; name: string }[] }> {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/configuration/languages`, this.httpOptions);
  }

  searchApi(key: string, page: number) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/search/movie?query=${key}&include_adult=false&language=${this.selectedLanguage.iso_639_1}&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  movieDetail(id: number) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/movie/${id}?language=${this.selectedLanguage.iso_639_1}`, this.httpOptions)
  }

  recommendations(id: number, page: number) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/movie/${id}/recommendations?language=${this.selectedLanguage.iso_639_1}&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  redirectSearch(key: string) {
    this.keyword = key;
    this.router.navigate(['/list/search/' + key]);
  }

  config(): Observable<any> {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/configuration`, this.httpOptions);
  }

  requestToken(): Observable<string> {
    const url = `${environment.defaultUrl}/${environment.v3}/authentication/token/new`;

    return this.http.get<any>(url, this.httpOptions).pipe(
      map((response: any) => response.request_token),
    );
  }

  createSessionID(requestToken: string): Observable<any> {
    const body = {
      "request_token": requestToken
    };

    return this.http.post<any>(`${environment.defaultUrl}/${environment.v3}/authentication/session/new`, body, this.httpOptions);
  }

  getAccount(session) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/account?api_key=${environment.accessKey}&session_id=${session}`, this.httpOptions);
  }

  detailAccount(id) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/account/${id}`, this.httpOptions);
  }

  getFavorit(page, id) {
    return this.http.get<any>(`${environment.defaultUrl}/${environment.v3}/account/${id}/favorite/movies?language=${this.selectedLanguage.iso_639_1}&page=${page}&sort_by=created_at.asc`, this.httpOptions).pipe(
      map((res: any) => res as any[])
    );
  }

  addFavorit(params, id) {
    return this.http.post<any>(`${environment.defaultUrl}/${environment.v3}/account/${id}/favorite`, params, this.httpOptions).pipe(
      map((res: any) => res as any[])
    );
  }


}
