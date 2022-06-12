import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-control',
  templateUrl: './company-control.component.html',
  styleUrls: ['./company-control.component.css']
})
export class CompanyControlComponent implements OnInit {

  public displayedColumns: string[] = ['name', 'address', 'phone', 'email', 'website', 'actions'];
  public companies: any[] = [
    {
      "name": "Company1",
      "address": "Address 1",
      "phone": "Phone 1",
      "email": "Email 1",
      "website": "Website 1"
    },
    {
      "name": "Company2",
      "address": "Address 2",
      "phone": "Phone 2",
      "email": "Email 2",
      "website": "Website 2"
    },
    {
      "name": "Company3",
      "address": "Address 3",
      "phone": "Phone 3",
      "email": "Email 3",
      "website": "Website 3"
    },
  ]
  constructor() { }
  
  public onEdit(company:any): void {
    console.log("edit");
  }

  public onDelete(company:any): void {
    console.log("delete");
  }
  public addCompany() {
    console.log("add company");
  }
  ngOnInit(): void {
  }

}
