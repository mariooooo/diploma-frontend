import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerStatComponent } from './lecturer-stat.component';

describe('LecturerStatComponent', () => {
  let component: LecturerStatComponent;
  let fixture: ComponentFixture<LecturerStatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturerStatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturerStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
