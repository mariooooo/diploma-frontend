import {Component, Inject, OnInit} from '@angular/core';
import {LecturerStatComponent} from '../lecturer-stat/lecturer-stat.component';
import {DbRequesterService} from '../../services/db-requester.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-student-stat',
  templateUrl: './student-stat.component.html',
  styleUrls: ['./student-stat.component.css']
})
export class StudentStatComponent implements OnInit {

  studentStat: any;
  constructor( private dbService: DbRequesterService,
               public dialogRef: MatDialogRef<LecturerStatComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.dbService.requestGetStudentById(this.data.id).subscribe(data => this.studentStat = data);
  }

}
