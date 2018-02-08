import { Component, OnInit } from '@angular/core';
import {DbRequesterService} from '../../services/db-requester.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any;
  gr: any;

  constructor(private dbService: DbRequesterService) { }

  ngOnInit() {
    this.dbService.requestGetGroups().subscribe(data => this.groups = data);
    this.dbService.requestGetGroupListById(1).subscribe(data => this.gr = data);
  }

}
