import { Injectable } from '@angular/core';
import { User} '../user'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';
import { UserrepoComponent } from '../userrepo/userrepo.component';
import { resolve } from 'dns';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
private formRepo:string = ''
user!: User;
repository!:Repository[];
private userName ='';
userrepo:any;
  constructor(private http: HttpClient) { 
    this.user = new User ("", "",0, 0, 0, "");
  }
userRequest(userName:string){
  this.userName=userName
  console.log(this.userName);
    
  interface ApiResponse {
    name:string;
    avatar_url: string;
    followers: number;
    following: number;
    public_repos: number;
    bio: string;
  }
  let promise = new Promise((resolve, reject)) => {
    this.http.get<ApiResponse>('')
  }
}
}
