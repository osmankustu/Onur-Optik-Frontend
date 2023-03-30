import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FramebrandService } from '../../services/framebrand.service';
import FrameBrand from '../../models/FrameBrand';

@Component({
  selector: 'app-frame-update',
  templateUrl: './frame-update.component.html',
  styleUrls: ['./frame-update.component.css']
})
export class FrameUpdateComponent implements OnInit {
  frameUpdateBrand:FrameBrand;
  frameUpdateForm:FormGroup;
  constructor(
    private toastService:ToastrService,
    private FrameBrandService:FramebrandService,
    private activeRoute:ActivatedRoute,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.activeRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getByIdFrameBrands(params["brandId"]);
      }
      else{
        this.toastService.warning("Sayfa Yüklenemedi");
      }
      
    });
    
  }
  
  createForm(){
    this.frameUpdateForm = this.formBuilder.group({
      brandId:["",Validators.required],
      markaAdi:["",Validators.required]
    })
  }
  
  getByIdFrameBrands(brandId:number){

    this.FrameBrandService.getByIdFrameBrand(brandId).subscribe(response=>{
      this.frameUpdateBrand = response.data;
      
    })

  }

  update(){
    if(this.frameUpdateForm.valid){
      let frameUpdateModel = Object.assign({},this.frameUpdateForm.value);
      this.FrameBrandService.updateFrameBrand(frameUpdateModel).subscribe(response =>{
        if(response.success){
          this.toastService.success(response.message,"Başarılı");
        }
        else{
          this.toastService.error(response.message,"Başarısız");
        }
      })
    }
    else{
      this.toastService.error("Formunuz Hatalıdır!","Başarısız");
    }

  }

}
