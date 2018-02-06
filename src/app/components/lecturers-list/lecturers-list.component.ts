import { Component, OnInit } from '@angular/core';
import { Lecturer } from '../../entities/lecturer';
import { DbRequesterService } from '../../services/db-requester.service';

@Component({
  selector: 'app-lecturers-list',
  templateUrl: './lecturers-list.component.html',
  styleUrls: ['./lecturers-list.component.css']
})
export class LecturersListComponent implements OnInit {
  // lecturers: any[] = [];
  lecturers: any; // ad-hoc to stop IDE spellchecker fuck my mind

  constructor(private dbService: DbRequesterService) { }

  ngOnInit() {
    this.dbService.requestGetLecturers().subscribe(data => this.lecturers = data); // ignore type warning here, it's working
    // console.log('response: ' + this.lecturers);
  }

}
