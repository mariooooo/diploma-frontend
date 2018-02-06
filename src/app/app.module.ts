import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LecturersListComponent } from './components/lecturers-list/lecturers-list.component';

import { DbRequesterService} from './services/db-requester.service';
import { LecturerStatComponent } from './components/lecturer-stat/lecturer-stat.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'lecturers', component: LecturersListComponent},
  { path: 'lecturer-stat/:id', component : LecturerStatComponent }
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LecturersListComponent,
    LecturerStatComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [DbRequesterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
