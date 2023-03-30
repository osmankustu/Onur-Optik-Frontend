import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import GlassBrand from '../../models/GlassBrand';
import { GlassbrandService } from '../../services/glassbrand.service';

@Component({
  selector: 'app-glass-brands-update',
  templateUrl: './glass-brands-update.component.html',
  styleUrls: ['./glass-brands-update.component.css']
})
export class GlassBrandsUpdateComponent implements OnInit {

  brandUpdateForm:FormGroup
  glassBrand:GlassBrand
  constructor(
    private GlassBrandService:GlassbrandService,
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createBrandUpdateForm();
    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getBrand(params["brandId"]);
      }
      else{
        this.toastrService.warning("Sayfa Yüklenemedi");
      }
    })

  }



  createBrandUpdateForm(){
    this.brandUpdateForm = this.formBuilder.group({
      brandId:["",Validators.required],
      markaAdi:["",Validators.required]
    })
  }

  getBrand(brandId:number){
    this.GlassBrandService.getByIdGlassBrand(brandId).subscribe(response =>{
      this.glassBrand = response.data;

    })
  }

  update(){
    if(this.brandUpdateForm.valid){
      let glassBrandUpdateModel = Object.assign({},this.brandUpdateForm.value);
      this.GlassBrandService.updateGlassBrand(glassBrandUpdateModel).subscribe(response =>{
        if(response.success){
          this.toastrService.success(response.message,"Başarılı");
        }
        else{
          this.toastrService.error(response.message,"Başarısız");
        }
      })
    }
    else{{
      this.toastrService.error("Form Geçersiz","Başarısız");
    }}
  }
}
