import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';


import {MatSidenavModule} from '@angular/material/sidenav'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { StudentsCrudComponent } from './views/students-crud/students-crud.component';
import { StudentsCreateComponent } from './components/students/students-create/students-create.component'
import { MatSnackBarModule } from '@angular/material/snack-bar';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StudentReadComponent } from './components/students/student-read/student-read.component';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { StudentUpdateComponent } from './components/students/student-update/student-update.component';
import { StudentDeletComponent } from './components/students/student-delet/student-delet.component'
/* import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    StudentsCrudComponent,
    StudentsCreateComponent,
    StudentReadComponent,
    StudentUpdateComponent,
    StudentDeletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgbModule,
/*     AngularFireModule.initializeApp(environment.firebase),
    AngularFirestore,
    AngularFireAnalyticsModule,

 */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
