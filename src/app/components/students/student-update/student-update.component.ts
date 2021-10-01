import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  student: Student = {
    name: '',
    ru: '',
    curso: '',
    dataN: ''

  }

  constructor(private studentService: StudentsService,
     private router:Router, 
     private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')

    this.studentService.readById(id).subscribe(student =>{
      this.student = student
    })
  }

  updateStudent():void{
    this.studentService.update(this.student).subscribe(()=>{
      this.studentService.showMenssage('Aluno alterado')
      this.router.navigate(['/students'])

    })
  }

  cancel(): void {
    this.router.navigate(['/students'])
  }

}
