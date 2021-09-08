import { Component, OnInit } from '@angular/core';
import { UserRepo } from '../user-repo';
import { SearchService } from '../searchservice/search.service';
@Component({
  selector: 'app-userrepo',
  templateUrl: './userrepo.component.html',
  styleUrls: ['./userrepo.component.css']
})
export class UserrepoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
