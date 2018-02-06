import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { DbRequesterService } from '../../services/db-requester.service';

@Component({
  selector: 'app-lecturer-stat',
  templateUrl: './lecturer-stat.component.html',
  styleUrls: ['./lecturer-stat.component.css']
})
export class LecturerStatComponent implements OnInit {

  id: number;
  lecturerStat;

  constructor(private activateRoute: ActivatedRoute, private dbService: DbRequesterService) {
    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    // this.dbService.requestGetLecturers().subscribe(data => this.lecturers = data);
    this.dbService.requestGetLecturerById(this.id).subscribe(data => this.lecturerStat = data);
  }

}
