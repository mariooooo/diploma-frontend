import {Component, Inject, OnInit} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DbRequesterService } from '../../services/db-requester.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-lecturer-stat',
  templateUrl: './lecturer-stat.component.html',
  styleUrls: ['./lecturer-stat.component.css']
})
export class LecturerStatComponent implements OnInit {

  lecturerStat;

  constructor ( private dbService: DbRequesterService,
                public dialogRef: MatDialogRef<LecturerStatComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
     this.dbService.requestGetLecturerById(this.data.id).subscribe(data => this.lecturerStat = data);
  }

}
