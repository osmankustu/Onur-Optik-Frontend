import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SatisService } from '../../services/satis.service';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';

import soldGlassesDto from '../../models/DTOs/SoldGlassesDto';

@Component({
  selector: 'app-customerget',
  templateUrl: './customerget.component.html',
  styleUrls: ['./customerget.component.css']
})
export class CustomergetComponent implements OnInit {

  customer:Customer
  satis:soldGlassesDto[]=[]
  constructor(
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private satisService:SatisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["musteriId"]){
        this.getCustomerDetail(params["musteriId"])
        this.getSatisByMusteriId(params["musteriId"])
      }else{
       this.toastrService.warning("Sayfa Yüklenemedi");
      }
    })
    
  }

  getCustomerDetail(musteriId:number){
    this.customerService.customerGetById(musteriId).subscribe(response =>{
        this.customer = response.data;
        
    })
  }

  getSatisByMusteriId(musteriId:number){
    this.satisService.getByIdSatis(musteriId).subscribe(response =>{
        this.satis = response.data
        
    })
  }
  //Müşterinin Aldığı Ürünleri getirme  Eklenecek 
}
