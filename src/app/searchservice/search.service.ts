import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRepo } from '../user-repo';
import { Repository } from '../repository';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private formRepo: string = '';
  user!: User;
  repository!: Repository[];
  private userName = '';
  userrepo!: UserRepo;
  constructor(private http: HttpClient) {
    this.user = new User('', '', 0, 0, 0, '');
  }
  userRequest(userName: string) {
    this.userName = userName;
    console.log(this.userName);

    interface ApiResponse {
      userName: string;
      name: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
      bio: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>('https://api.github.com/users/' + this.userName)
        .toPromise()
        .then(
          (Response) => {
            this.user.photo = Response.avatar_url;
            this.user.userName = Response.name;
            this.user.bio = Response.bio;
            this.user.followers = Response.followers;
            this.user.following = Response.following;
            this.user.repos = Response.public_repos;

            resolve(Response);
          },
          (error) => {
            this.user.photo = 'Avatar not found!';
            this.user.userName = 'User not found!';

            reject(error);
          }
        );
    });
    return promise;
  }

  userRepoRequest(result: string) {
    return this.http.get('https://api.github.com/users/' + result + '/repos');
  }

  repoRequest(request: string) {
    this.formRepo = request;
    return this.http.get(environment.repoApi + this.formRepo + '*');
  }
}
