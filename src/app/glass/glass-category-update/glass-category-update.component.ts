import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GlasscategoryService } from '../../services/glasscategory.service';
import GlassCategory from '../../models/GlassCategory';

@Component({
  selector: 'app-glass-category-update',
  templateUrl: './glass-category-update.component.html',
  styleUrls: ['./glass-category-update.component.css']
})
export class GlassCategoryUpdateComponent implements OnInit {
  glassCategory:GlassCategory
  glassCategoryUpdateForm:FormGroup 

  constructor(
    private toasterService:ToastrService,
    private activeRoute:ActivatedRoute,
    private fromBuilder:FormBuilder,
    private glassCategoryService:GlasscategoryService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.activeRoute.params.subscribe(params =>{
      if(params["categoryId"]){
        this.getCategoryById(params["categoryId"]);
      }
      else{
        this.toasterService.warning("Sayfa Yüklenemedi");
      }

    })
  }


  createForm(){
    this.glassCategoryUpdateForm = this.fromBuilder.group({
      CategoryId:["",Validators.required],
      CategoryName:["",Validators.required]
    })
  }

  getCategoryById(categoryId:number){
    this.glassCategoryService.getGlassesCategoryById(categoryId).subscribe(response =>{
      this.glassCategory = response.data;
      
    })
  }

  update(){
    if(this.glassCategoryUpdateForm.valid){{
      let glassCategoryUpdateModel = Object.assign({},this.glassCategoryUpdateForm.value);
      this.glassCategoryService.updateGlassCategory(glassCategoryUpdateModel).subscribe(response =>{
        if(response.success){
          this.toasterService.success(response.message,"Başarılı");
        }
        else{
          this.toasterService.error(response.message,"Başarısız");
        }
      })
    }}
    else{
      this.toasterService.warning("Formunuz Hatalıdır !","Başarısız");
    }
  }

}
