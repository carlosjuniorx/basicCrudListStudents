import { Component, OnInit } from '@angular/core';
import { Student } from '../students.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-read',
  templateUrl: './student-read.component.html',
  styleUrls: ['./student-read.component.css']
})
export class StudentReadComponent implements OnInit {

  students?: Student[];
  public page = 1;
  public pageSize= 10; 
  public total=0
  
  
  constructor(private studentService: StudentsService) { }
  
  ngOnInit(): void {
    this.studentService.read().subscribe(students =>{
      this.students = students
      this.total=this.students?.length
    })
  }
  
  


}
