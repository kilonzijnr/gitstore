import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import { SearchService } from '../searchservice/search.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  User!: User;
  UserRepos: any;
  result: string =''

  constructor(private searchService: SearchService) { }
searchUerser() {
  this.searchService.userRequest(this.result)
  this.User = this.searchService.user
}
searchUserRepo(){
  this.searchService.userRepoRequest(this.result).subscribe((UserRepos: any)=>{
    this.UserRepos=UserRepos,
    console.log(this.UserRepos, "User Repos");
    
  })
}
  ngOnInit(): void {
  }

}
