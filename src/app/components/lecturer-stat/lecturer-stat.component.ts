import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lecturer-stat',
  templateUrl: './lecturer-stat.component.html',
  styleUrls: ['./lecturer-stat.component.css']
})
export class LecturerStatComponent implements OnInit {

  id: number;
  constructor(private activateRoute: ActivatedRoute) {

    this.id = activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
