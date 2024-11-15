import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const {apiUrl} = environment;
    return this.http.get<Theme[]>(`${apiUrl}/themes`);
  }

  getPosts() {
    const {apiUrl} = environment;
    return this.http.get<Post[]>(`${apiUrl}/posts`);
  }
}
