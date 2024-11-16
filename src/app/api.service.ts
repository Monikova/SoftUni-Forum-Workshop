import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Post } from './types/post';
import { Theme } from './types/theme';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl: string = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  getThemes(){
    // const {apiUrl} = environment;
    return this.http.get<Theme[]>(`${this.apiUrl}/themes`);
  }
  
  getPosts(limit?: number) {
    // const {apiUrl} = environment;
    let url = `${this.apiUrl}/posts`;
    
    if(limit){ 
      url += `?limit=${limit}`;
    }
    
    return this.http.get<Post[]>(url);
  }

}
