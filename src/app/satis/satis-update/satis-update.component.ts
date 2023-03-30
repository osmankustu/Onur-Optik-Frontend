import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/Customer';
import GlassBrand from '../../models/GlassBrand';
import GlassCategory from '../../models/GlassCategory';
import GlassesSatisDetaliDto from '../../models/DTOs/GlassesSatisDetailDto';
import { SatisService } from '../../services/satis.service';
import FrameBrand from '../../models/FrameBrand';
import { GlassbrandService } from '../../services/glassbrand.service';
import { GlasscategoryService } from '../../services/glasscategory.service';
import { FramebrandService } from '../../services/framebrand.service';
import { CustomerService } from '../../services/customer.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-satis-update',
  templateUrl: './satis-update.component.html',
  styleUrls: ['./satis-update.component.css']
})
export class SatisUpdateComponent implements OnInit {
  
  
  satisUpdateForm:FormGroup
  satis:GlassesSatisDetaliDto[]
  glassBrand:GlassBrand[]=[]
  glassCategory:GlassCategory[]=[]
  frameBrands:FrameBrand[]=[]


  constructor(
    private satisService:SatisService,
    private glassBrandService:GlassbrandService,
    private glassCategoryService:GlasscategoryService,
    private frameBrandService:FramebrandService,
    private customerService:CustomerService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getFrameBrands();
    this.getGlassBrands();
    this.getGlassCategoryes();
    this.activeRoute.params.subscribe(params =>{
      if(params["glassesId"]){
        this.getSatisById(params["glassesId"])
        
      }
      else{
        this.toastrService.warning("Sayfa Yüklenemedi")
      }
    })

  }
  

  createForm(){
    this.satisUpdateForm = this.formBuilder.group({
      glassesId:["",Validators.required],
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
  getSatisById(satisId:number){
    this.satisService.getGlassesById(satisId).subscribe(response =>{
     this.satis = response.data
     
    })
  }


  getGlassBrands(){
    this.glassBrandService.getGlassBrand().subscribe(response =>{
      this.glassBrand = response.data
    })
  }

  getGlassCategoryes(){
    this.glassCategoryService.getGlassCategory().subscribe(response =>{
      this.glassCategory = response.data
    })

  }
  getFrameBrands(){
    this.frameBrandService.getFrameBrand().subscribe(response => {
      this.frameBrands = response.data
    })
  }

  update(){
    if(this.satisUpdateForm.valid){
      let satisUpdateModel = Object.assign({},this.satisUpdateForm.value);
      this.satisService.updateSatis(satisUpdateModel).subscribe(response => {
        if(response.success){
          this.toastrService.success(response.message,"Başarılı")
        }
        else{
          this.toastrService.error(response.message,"Başarısız")
        }
      })

    }
    else{
      this.toastrService.warning("Formunuz Hatalıdır");
      
    }
  }
}
