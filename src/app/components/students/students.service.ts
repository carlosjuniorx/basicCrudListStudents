import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar}from'@angular/material/snack-bar'
import { Observable } from 'rxjs';
import { Student } from './students.model';
//import { AngularFirestore } from '@angular/fire/compat/firestore';





@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseUrl = "http://localhost:3001/listaAlunos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMenssage(msg: string): void{
    this.snackBar.open(msg,'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(student: Student): Observable<Student>{
    return this.http.post<Student>(this.baseUrl, student)
  }

  read(): Observable<Student[]>{
    return this.http.get<Student[]>(this.baseUrl)
  }

  readById(id:string | null): Observable<Student>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Student>(url)
  }

  update(student: Student): Observable<Student>{
    const url = `${this.baseUrl}/${student.id}`
    return this.http.put<Student>(url, student)
  }
  delete(student: Student): Observable<Student>{
    const url = `${this.baseUrl}/${student.id}`
    return this.http.delete<Student>(url)
  }

}
