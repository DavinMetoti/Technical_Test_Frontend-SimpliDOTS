import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
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
      'Authorization': 'Bearer ' + environment.bearer
    })
  };

  keyword: string;

  constructor(
    private http: HttpClient,
    public router: Router
  ) {
  }

  tmdbApi(patch: string, page: number): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}movie/${patch}?language=en-US&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  tmdbApigenre(page: number, id: number): Observable<any[]> {
    return this.http.get<any>(`${environment.apiUrl}discover/movie?page=${page}&sort_by=popularity.desc&with_genres=${id}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  genreApi(language: string): Observable<{ genres: { id: number; name: string }[] }> {
    return this.http.get<{ genres: { id: number; name: string }[] }>(`${environment.apiUrl}genre/movie/list?${language}`, this.httpOptions);
  }

  searchApi(key: string, page: number) {
    return this.http.get<any>(`${environment.apiUrl}search/movie?query=${key}&include_adult=false&language=en-US&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  movieDetail(id: number) {
    return this.http.get<any>(`${environment.apiUrl}movie/${id}?language=en-US`, this.httpOptions)
  }

  recommendations(id: number, page: number) {
    return this.http.get<any>(`${environment.apiUrl}movie/${id}/recommendations?language=en-US&page=${page}`, this.httpOptions)
      .pipe(
        map((res: any) => res as any[])
      );
  }

  redirectSearch(key: string) {
    this.keyword = key;
    this.router.navigate(['/list/search/' + key]);
  }

  config(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}configuration`, this.httpOptions);
  }

  requestToken(): Observable<string> {
    const url = `${environment.apiUrl}authentication/token/new`;

    return this.http.get<any>(url, this.httpOptions).pipe(
      map((response: any) => response.request_token),
    );
  }

  createSessionID(requestToken: string): Observable<any> {
    const body = {
      "request_token": requestToken
    };

    return this.http.post<any>(`${environment.apiUrl}authentication/session/new`, body, this.httpOptions);
  }

  getAccount(session) {
    return this.http.get<any>(`${environment.apiUrl}account?api_key=${environment.bearer}&session_id=${session}`, this.httpOptions);
  }

  detailAccount(id) {
    return this.http.get<any>(`${environment.apiUrl}account/${id}`, this.httpOptions);
  }

  getFavorit(page, id) {
    return this.http.get<any>(`${environment.apiUrl}account/${id}/favorite/movies?language=en-US&page=${page}&sort_by=created_at.asc`, this.httpOptions).pipe(
      map((res: any) => res as any[])
    );
  }

  addFavorit(params, id) {
    return this.http.post<any>(`${environment.apiUrl}account/${id}/favorite`, params, this.httpOptions).pipe(
      map((res: any) => res as any[])
    );
  }


}
