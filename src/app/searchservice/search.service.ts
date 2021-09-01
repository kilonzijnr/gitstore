import { Injectable } from '@angular/core';
import { User} '../user'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Repository } from '../repository';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
private formRepo:string = ''
user!: User;
repository!:Repository[];
private userName ='';
  constructor(private http: HttpClient) { 
    this.user = new User ("", "",0, 0, 0, "");
  }
}
