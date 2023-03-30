import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from '../../../services/customer.service';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-add-dialog',
  templateUrl: './customer-add-dialog.component.html',
  styleUrls: ['./customer-add-dialog.component.css']
})
export class CustomerAddDialogComponent implements OnInit {

  musteriAddForm:FormGroup
  success:boolean
  constructor(
    private customerService:CustomerService,
    private formBuilder:FormBuilder,
    private toasterService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createMusteriAdd();
  }



  createMusteriAdd(){

    this.musteriAddForm = this.formBuilder.group({
      musteriId:0,
      adi:["",Validators.required],
      soyadi:["",Validators.required],
      nationalIdentity:["",Validators.nullValidator],
      yakinNationalIdentity:["",Validators.nullValidator],
      phoneNumber:["",Validators.required,],
      address:["",Validators.nullValidator],
      dateOfBirth:["",Validators.required],
      
      
      
    })
  }

  add(){
    if(this.musteriAddForm.valid){
      let productModel = Object.assign({},this.musteriAddForm.value);
      this.customerService.addCustomer(productModel).subscribe(Response =>{
        if(Response.message == "Bu Müşteri Sistemde Mevcut"){
          this.toasterService.error(Response.message,"Başarısız");
          this.success =false
        }
        else{
          this.toasterService.success(Response.message,"Başarılı");
          this.success = true
        }
        
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toasterService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
          this.success = false
        } 
      })      
    } 
     else{
       this.toasterService.error("Müşteri Eklenemedi : Formunuz Hatalıdır.","Dikkat!!")

        this.success =false
     }
  }

}
