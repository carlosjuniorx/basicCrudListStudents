import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from'./views/home/home.component'
import { StudentsCrudComponent } from './views/students-crud/students-crud.component'
import { StudentsCreateComponent } from './components/students/students-create/students-create.component';
import { StudentUpdateComponent } from './components/students/student-update/student-update.component';
import { StudentDeletComponent } from './components/students/student-delet/student-delet.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent

},{
  path:"students",
  component: StudentsCrudComponent
},{
  path: "students/create",
  component: StudentsCreateComponent
},
{
  path: "students/update/:id",
  component: StudentUpdateComponent
},
{
  path: "students/delet/:id",
  component: StudentDeletComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
