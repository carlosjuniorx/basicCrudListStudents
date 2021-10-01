import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css']
})
export class StudentsCreateComponent implements OnInit {
  student: Student = {
    name: '',
    ru: '',
    curso: '',
    dataN: ''

  }

  constructor(private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {

  }

  createStudent(): void {
    this.studentsService.create(this.student)
      this.studentsService.showMenssage('Aluno criado')
      this.router.navigate(['/students'])  
  }
  cancel(): void {
    this.router.navigate(['/students'])
  }
}
