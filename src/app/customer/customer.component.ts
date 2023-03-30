import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { ToastrService } from 'ngx-toastr'
import { Customer } from '../models/Customer';
import { CustomerService } from '../services/customer.service';
import {FormGroup,FormControl, Validators, FormBuilder  } from "@angular/forms";  
import { DatePipe } from '@angular/common';

declare interface islemModel{
      islemAdi:string
      islemIcon:string
      islemUrl:string
}

export const islem:islemModel[]=[
  {islemAdi:"Müşteri Ekle",islemIcon:"https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png",islemUrl:"#/islemler/musteri/ekle"},
  {islemAdi:"Müşteri Listesi",islemIcon:"https://cdn4.iconfinder.com/data/icons/zoldo-miscellaneous-003/64/task_report_list-512.png",islemUrl:"#/islemler/musteri/listele"}
]

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
 
 
  islemMenu:any[]

  constructor(private customerService:CustomerService,
    private formBuilder:FormBuilder,
    private toasterService:ToastrService) {
      
     }



  ngOnInit(): void {
    this.islemMenu = islem.filter(menuItem => menuItem)
  }

  

  

}
