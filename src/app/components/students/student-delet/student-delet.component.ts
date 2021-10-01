import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-delet',
  templateUrl: './student-delet.component.html',
  styleUrls: ['./student-delet.component.css']
})
export class StudentDeletComponent implements OnInit {
  student: Student = {
    name: '',
    ru: '',
    curso: '',
    dataN: ''

  }

  constructor(private studentService: StudentsService,
    private router: Router,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.studentService.readById(id).subscribe(student =>{
      this.student = student
    })
   
  }

  deleteStudent():void{
    this.studentService.delete(this.student).subscribe(()=>{
      this.studentService.showMenssage('Aluno execluido')
      this.router.navigate(['/students'])
    })
  }
  cancel():void{
    this.router.navigate(['/students'])
  }

}
