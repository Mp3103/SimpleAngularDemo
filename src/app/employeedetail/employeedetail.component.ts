import { Component, OnInit } from '@angular/core';
import { Employeelist } from './employeelist';


@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor() { }

  employeeList : Employeelist[] = [

    new Employeelist('Meet','Patel', 65000),
    new Employeelist('Harmit','Patel', 62000),
    new Employeelist('Teo','Orge', 61000),
    new Employeelist('Ariel','Martin', 66000)

  ];

  ngOnInit(): void {
  }

}
