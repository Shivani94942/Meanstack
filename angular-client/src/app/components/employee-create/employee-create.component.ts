import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }



  ngOnInit(): void {
  }
  onSubmit(data){
    this.employeeService.createEmployee(data);
    console.log(data);
  }

}
