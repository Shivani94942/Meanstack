import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IEmployee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl="http://localhost:2222/api/v1/employee";

  private updateUrl="/:id";

  private deleteUrl="/:id"

  constructor(private http:HttpClient) { }

  getEmployees():Observable<any>{
    return this.http.get<any>(this.baseUrl)
  }

  createEmployee(data){
    this.http.post(this.baseUrl,data)
    }

  updateEmployee(){

      //let employee;
      //return this.http.put<IEmployee>(`${this.baseUrl+this.updateUrl}`,employee);
  }
  deleteEmployee(){

  }


  
}
