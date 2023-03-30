import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlasscategoryService } from '../../services/glasscategory.service';
import { Customer } from '../../models/Customer';
import FrameBrand from '../../models/FrameBrand';
import GlassBrand from '../../models/GlassBrand';
import GlassCategory from '../../models/GlassCategory';
import { GlassbrandService } from '../../services/glassbrand.service';
import { FramebrandService } from '../../services/framebrand.service';
import { CustomerService } from '../../services/customer.service';
import { SatisService } from '../../services/satis.service';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import { CustomerAddDialogComponent } from './customer-add-dialog/customer-add-dialog.component';
import { bottom } from '@popperjs/core';



@Component({
  selector: 'app-satisyap',
  templateUrl: './satisyap.component.html',
  styleUrls: ['./satisyap.component.css']
})
export class SatisyapComponent implements OnInit {
  SatisForm:FormGroup
  customers:Customer[]=[]
  glassBrand:GlassBrand[]=[]
  glassCategory:GlassCategory[]=[]
  frameBrands:FrameBrand[]=[]
  filterIdent="";
  
  

  constructor(
    private glassBrandService:GlassbrandService,
    private glassCategoryService:GlasscategoryService,
    private frameBrandService:FramebrandService,
    private customerService:CustomerService,
    private satisService:SatisService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private dialog:MatDialog
    ) { }

  ngOnInit(): void {
    this.createForm();
    this.getGlassBrand();
    this.getGlassCategory();
    this.getFrameBrands();
    this.getCustomer();
    
  }

  openCustomerAddDialog(){
   const dialogRef = this.dialog.open(CustomerAddDialogComponent,{
      
      
    })

    dialogRef.afterClosed().subscribe(result =>{
      
    })
  }

  


  createForm(){
    this.SatisForm = this.formBuilder.group({
    glassesId:0,
    customerId:["",Validators.required],
    glassBrandId:["",Validators.required],
    glassCategoryId:["",Validators.required],
    glassType:["",Validators.required],
    rsph:["",Validators.required],
    rcyl:["",Validators.required],
    raks:["",Validators.required],
    lsph:["",Validators.required],
    lcyl:["",Validators.required],
    laks:["",Validators.required],
    frameBrandId:["",Validators.required],  
    frameModel:["",Validators.required],
    frameEcartman:["",Validators.required],
    frameColor: ["",Validators.required],
    frameSerialNumber:["",Validators.required],
    prescriptNo:["",Validators.required],
    prescriptDate:["",Validators.required],
    isEntered:["",Validators.required],
    gozlukNot:["",Validators.required],
    satisTarihi:["",Validators.required],
    tutar:["",Validators.required]
    })

  }




  getCustomer(){
    this.customerService.getCustomer().subscribe(response => {
      this.customers = response.data
    })

  }
  getGlassBrand(){
    this.glassBrandService.getGlassBrand().subscribe(response => {
      this.glassBrand = response.data
    })
  }
  getGlassCategory(){
    this.glassCategoryService.getGlassCategory().subscribe(response => {
      this.glassCategory = response.data
    })

  }

  getFrameBrands(){
    this.frameBrandService.getFrameBrand().subscribe(response =>{
      this.frameBrands = response.data
    })

  }

  add(){
    
    console.log(this.SatisForm.value)
    if(this.SatisForm.valid){
      let satisModel = Object.assign({},this.SatisForm.value);
      this.satisService.addSatis(satisModel).subscribe(response => {
        this.toastrService.success(response.message,"Başarılı")
      },responseError=>{
        if(responseError.error.Errors.length>0){
          for (let i = 0; i <responseError.error.Errors.length; i++) {
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage
              ,"Doğrulama hatası")
          }       
        } 
      }
      )
    }
    else{
      this.toastrService.warning("Satış Formunuz Hatalıdır","Başarısız");
    }
  }
}


