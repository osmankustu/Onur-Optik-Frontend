import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer } from '../../models/Customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-customerupdate',
  templateUrl: './customerupdate.component.html',
  styleUrls: ['./customerupdate.component.css']
})
export class CustomerupdateComponent implements OnInit {
  customer:Customer
  MusteriGuncelleForm:FormGroup
  
  constructor(
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder

  ) { }

  ngOnInit(): void {
    this.createMusteriGuncelleForm()
    this.activatedRoute.params.subscribe(params=>{
      if(params["musteriId"]){
        this.getCustomer(params["musteriId"]);
        
        console.log(params)
      }
      else{
        this.toastrService.warning("Sayfa Yüklenemedi")
        
      }
    })
    

  }

  createMusteriGuncelleForm(){
    this.MusteriGuncelleForm = this.formBuilder.group({
      musteriId:["",Validators.required],
      adi:[,Validators.required],
      soyadi:["",Validators.required],
      nationalIdentity:["",Validators.nullValidator],
      yakinNationalIdentity:["",Validators.nullValidator],
      phoneNumber:["",Validators.required,],
      address:["",Validators.nullValidator],
      dateOfBirth:["",Validators.required],
      kayitTarihi:["",Validators.required]
    })
  }

  

  getCustomer(musteriId:number){
    this.customerService.customerGetById(musteriId).subscribe(response=>{
      this.customer = response.data
      
    })
  }

  update(){
    if(this.MusteriGuncelleForm.valid){
      let customerUpdateModel = Object.assign({},this.MusteriGuncelleForm.value);
      this.customerService.customerUpdate(customerUpdateModel).subscribe(response =>{
        if(response.success){
          this.toastrService.success(response.message,"Başarılı");
        }
        else{
          this.toastrService.error(response.message,"Başarısız")
        }
      })

    }
    
  }
}
