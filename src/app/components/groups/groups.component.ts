import { Component, OnInit } from '@angular/core';
import {DbRequesterService} from '../../services/db-requester.service';
import {MatDialog} from '@angular/material';
import {StudentStatComponent} from '../student-stat/student-stat.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups: any;
  gr: any;

  constructor(private dbService: DbRequesterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.requestGetGroups().subscribe(data => this.groups = data);
    this.dbService.requestGetGroupListById(1).subscribe(data => this.gr = data); // TODO fix request
  }

  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(StudentStatComponent, {
      data: { id: id, name: name }
    });
    dialogRef.afterClosed().subscribe();
  }

}
