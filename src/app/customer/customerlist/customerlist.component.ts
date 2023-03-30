import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
 
  customers:Customer[]=[];
  customer:Customer;
  dataLoaded = false;
  filterText="";
  filterIdentity="";
  filterYakinIdentity="";
  constructor(
    private customerService:CustomerService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      if(params["musteriId"]){
        this.getCustomerDetail(params["musteriId"]);
      }else{
        this.getAllCustomer()
      }
    })
  }

  getCustomerDetail(musteriId:number){
      
      this.customerService.customerGetById(musteriId).subscribe(response =>{
          this.customer = response.data;
          
        })
  }

  getAllCustomer(){
    
      this.customerService.getCustomer().subscribe(response => {
        this.customers = response.data
        
        if(response.success){
          this.toastrService.show(response.message,"Başarılı !")
          this.dataLoaded == true
        }
        
        
       },responseError => {

        if(responseError.message == 'Http failure response for https://localhost:7107/api/Customer/getall: 500 OK'){

          this.toastrService.error("Bu Sayfada İşlem  için Yetkiniz Yoktur");
        }
          
       })
    } 
}
