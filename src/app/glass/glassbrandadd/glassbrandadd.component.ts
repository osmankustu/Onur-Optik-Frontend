import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlassbrandService } from '../../services/glassbrand.service';

@Component({
  selector: 'app-glassbrandadd',
  templateUrl: './glassbrandadd.component.html',
  styleUrls: ['./glassbrandadd.component.css']
})
export class GlassbrandaddComponent implements OnInit {
  brandAddForm:FormGroup
  constructor(
    private GlassBrandService:GlassbrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
    this.brandAddForm = this.formBuilder.group({
      brandId:0,
      markaAdi:["",Validators.required]
    })
  }

  add(){
    if(this.brandAddForm.valid){
      
      let BrandModel = Object.assign({},this.brandAddForm.value);
      this.GlassBrandService.addGlassBrand(BrandModel).subscribe(Response =>{
        this.toastrService.success(Response.message,"Başarılı");
        
      },responseError =>{
        if(responseError.error.Errors.length>0){
          
          for(let i= 0 ; i <responseError.error.Errors.length; i++){
            
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası !");  
          }
        }
      })
  }
  else{
    this.toastrService.error("Marka Eklenemedi : Formunuz Hatalıdır.","Dikkat!!")
  }
}

}