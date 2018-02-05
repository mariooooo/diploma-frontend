import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Lecturer } from '../entities/lecturer';

@Injectable()
export class DbRequesterService {

  url = 'http://localhost:8080/';

  private data: Lecturer[] = [
    { id: 1, name: 'name1', photo: 'p'},
    { id: 2, name: 'name2', photo: '2'}
  ];

  getData(): Lecturer[] {
    return this.data;
  }

  requestData() {
    return this.http.get(this.url + 'getLecturers/');
  }

  constructor(private http: HttpClient) { }

}
