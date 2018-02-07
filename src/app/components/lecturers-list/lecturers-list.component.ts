import { Component, OnInit } from '@angular/core';
import { Lecturer } from '../../entities/lecturer';
import { DbRequesterService } from '../../services/db-requester.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LecturerStatComponent} from '../lecturer-stat/lecturer-stat.component';

@Component({
  selector: 'app-lecturers-list',
  templateUrl: './lecturers-list.component.html',
  styleUrls: ['./lecturers-list.component.css']
})
export class LecturersListComponent implements OnInit {
  // lecturers: any[] = [];
  lecturers: any; // ad-hoc to stop IDE spellchecker fuck my mind

  constructor(private dbService: DbRequesterService, public dialog: MatDialog) { }

  ngOnInit() {
    this.dbService.requestGetLecturers().subscribe(data => this.lecturers = data); // ignore type warning here, it's working
    // console.log('response: ' + this.lecturers);
  }

  openDialog(id: number, name: string): void {
    const dialogRef = this.dialog.open(LecturerStatComponent, {
      data: { id: id, name: name }
    });
    dialogRef.afterClosed().subscribe();
    console.log(id);
  }
}
