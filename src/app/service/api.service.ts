import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'https://api.themoviedb.org/3/discover/movie';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie?query=';
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjI0NTE3MGFjZDIzY2E3YjIzMmVmOTMzNTAzNzI4OCIsInN1YiI6IjY1MjE0MzZmZWE4NGM3MDEyZDZiMjRhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xv7UwjEmDGX3cj4-XR_gfixTXE7C6zjueO3CQmfvnbg';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.apiKey
    }),
    withCredentials: false
  };
  private currentPage = 1;

  constructor(private http: HttpClient) { }

  public getMovies(): Promise<any> {
    const url = `${this.apiUrl}?page=${this.currentPage}`;
    this.currentPage++;
    return this.http.get(url, this.httpOptions).toPromise();
  }

  public searchMovie(key: any) {
    return new Promise((resolve, reject) => {
      return this.http.get(this.searchUrl + key, this.httpOptions).subscribe({
        next: (res) => resolve(res),
        error: (err) => reject(err)
      });
    })
  }

  public genreMovie(genreId: number): Promise<any> {
    const url = `${this.apiUrl}?page=${this.currentPage}&with_genres=${genreId}`;
    this.currentPage++;
    return this.http.get(url, this.httpOptions).toPromise();
  }
}
