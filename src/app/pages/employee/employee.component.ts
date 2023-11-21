import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employeeArr:any[] = [];

  employeeObj : any ;

  constructor(private empServ : EmployeeService){
    this.resetObj();
  }

  resetObj(){
    this.employeeObj = {
  "empId": 0,
  "empName": "",
  "empContactNo": "",
  "empAltContactNo": "",
  "empEmail": "",
  "addressLine1": "",
  "addressLine2": "",
  "pincode": "",
  "city": "",
  "state": "",
  "bankName": "",
  "iFSC": "",
  "accountNo": "",
  "bankBranch": "",
  "salary": 0
    }
  }

  ngOnInit(): void {
    debugger;
    this.loadAllEmployee();
  }

   loadAllEmployee(){
    debugger;
     this.empServ.getAllEmployee()
     .subscribe((res:any)=>{
      debugger;
      this.employeeArr = res.data;
     })
   }

   onSave(){
    debugger;
      this.empServ.createEmployee(this.employeeObj).subscribe((res:any)=>{
        debugger;
        if(res.result){
          this.loadAllEmployee();
          alert(res.message);
          this.resetObj();
        }else{
          alert(res.message);
        }
      })
   }

   onEdit(id:number){
      this.empServ.getEmpById(id).subscribe((res)=>{
        this.employeeObj = res.data; 
      })
   }

   onUpdate(){
    this.empServ.updateEmployee(this.employeeObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        this.loadAllEmployee();
        alert(res.message);
        this.resetObj();
      }else{
        alert(res.message);
      }
    })
   }

   onDelete(id : number){
      this.empServ.deleteEmpById(id).subscribe((res)=>{
        if(res.result){
          this.loadAllEmployee();
          alert(res.message);
          // this.resetObj();
        }else{
          alert(res.message);
        }
      })
   }
}
