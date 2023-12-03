import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject,tap, throwError } from 'rxjs';
import { User } from '../shared/models/GithubUser';
import { Repo } from '../shared/models/GithubRepo';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL:string='https://api.github.com';
  repos:BehaviorSubject<Repo[]>=new BehaviorSubject<Repo[]>([]);
  constructor(private httpClient: HttpClient) { }

  getUser(githubUsername: string):Observable<User|any> {
    return this.httpClient.get(`${this.baseURL}/users/${githubUsername}`);
  }

  getRepos(githubUsername:string,limit:number=10,pageNum:number=1):Observable<Repo[]|any>{
    return this.httpClient.get(`${this.baseURL}/users/${githubUsername}/repos?per_page=${limit}&page=${pageNum}&sort=updated`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
