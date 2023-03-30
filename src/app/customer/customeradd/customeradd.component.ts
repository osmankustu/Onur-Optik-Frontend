import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customeradd',
  templateUrl: './customeradd.component.html',
  styleUrls: ['./customeradd.component.css']
})
export class CustomeraddComponent implements OnInit {
  musteriAddForm:FormGroup
  
  constructor(
    private customerService:CustomerService,
    private formBuilder:FormBuilder,
    private toasterService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createMusteriAddForm();
  }

  
  createMusteriAddForm(){
    this.musteriAddForm = this.formBuilder.group({
      musteriId:0,
      adi:["",Validators.required],
      soyadi:["",Validators.required],
      nationalIdentity:["",Validators.nullValidator],
      yakinNationalIdentity:["",Validators.nullValidator],
      phoneNumber:["",Validators.required,],
      address:["",Validators.nullValidator],
      dateOfBirth:["",Validators.required],
      // kayitTarihi:["",Validators.required],
      
      
    })
  }
  

  add(){
    if(this.musteriAddForm.valid){
      let customerModel = Object.assign({},this.musteriAddForm.value);
      this.customerService.addCustomer(customerModel).subscribe(Response =>{
        if(Response.message == "Bu Müşteri Sistemde Mevcut"){
          this.toasterService.error(Response.message,"Başarısız");
        }
        else{
          this.toasterService.success(Response.message,"Başarılı");
        }
        
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toasterService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      })      
    } 
     else{
       this.toasterService.error("Müşteri Eklenemedi : Formunuz Hatalıdır.","Dikkat!!")
      
     }
  }
}
