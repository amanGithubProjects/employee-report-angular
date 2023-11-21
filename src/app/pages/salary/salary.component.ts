import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit{

  salaryObj:any = {
  "salaryId": 0,
  "employeeId": 0,
  "salaryDate": "",
  "totalAdvance": 0,
  "presentDays": 0,
  "salaryAmount": 0
  }

  salaryArray : any [] = [];
  employeeArray: any[]=[];

  constructor(private empSrv: EmployeeService, private http: HttpClient ){
    
  }
  ngOnInit(): void {
    this.getAllSalary();
    this.loadAllEmp();
  }

  loadAllEmp(){
    this.empSrv.getAllEmployee().subscribe((res:any)=>{
      this.employeeArray = res.data;
    })
  }

  getAllSalary(){
    this.http.get('http://onlinetestapi.gerasim.in/api/TeamSync/GetAllSalary').subscribe((res:any)=>{
      this.salaryArray = res.data;
    })
  }

  onSave(){

  }
}
