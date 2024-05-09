import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "https://api.github.com/users/"
  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string = "i-madhav") {
    return this.httpClient.get(`${this.baseUrl}${githubUsername}`);
  }

  //server side rendering is happening here
  getRepoInfo(githubUsername: string = "i-madhav", page: number = 1, perPage: number = 30) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', perPage.toString());

    return this.httpClient.get<any>(`${this.baseUrl}${githubUsername}/repos`, { params });
  }
}
