import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lecturer } from '../entities/lecturer';

@Injectable()
export class DbRequesterService {

  url = 'http://localhost:8080/';

  requestGetLecturers() {
    return this.http.get(this.url + 'getLecturers/');
  }

  requestGetGroups() {
    return this.http.get(this.url + 'getGroups/');
  }

  requestGetLecturerById(id: number) {
    return this.http.get(this.url + 'getStats/lec/' + id);
  }

  requestGetGroupListById(id: number) {
    return this.http.get(this.url + 'getStudents/' + id);
  }

  requestGetStudentById(id: number) {
    return this.http.get(this.url + 'getStats/stud/' + id);
  }

  constructor(private http: HttpClient) { }

}
