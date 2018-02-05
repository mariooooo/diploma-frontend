import { Injectable } from '@angular/core';
import {Lecturer} from '../entities/lecturer';

@Injectable()
export class DbRequesterService {

  private data: Lecturer[] = [
    { id: 1, name: 'name1', photo: 'p'},
    { id: 2, name: 'name2', photo: '2'}
  ];

  getData(): Lecturer[] {

    return this.data;
  }

  constructor() { }

}
