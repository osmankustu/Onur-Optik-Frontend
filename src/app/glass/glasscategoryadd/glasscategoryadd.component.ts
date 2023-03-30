import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GlasscategoryService } from '../../services/glasscategory.service';
@Component({
  selector: 'app-glasscategoryadd',
  templateUrl: './glasscategoryadd.component.html',
  styleUrls: ['./glasscategoryadd.component.css']
})
export class GlasscategoryaddComponent implements OnInit {
  categoryAdd:FormGroup
  constructor(
    private formBuilder:FormBuilder,
    private toastrService:ToastrService,
    private glassCategoryService:GlasscategoryService
  ) { }

  ngOnInit(): void {
    this.createCategoryAddForm()
  }

  createCategoryAddForm(){
    this.categoryAdd = this.formBuilder.group({
      CategoryId:0,
      categoryName:["",Validators.required]
    })

  }

  add(){
    if (this.categoryAdd.valid) {
      let categoryModel = Object.assign({},this.categoryAdd.value);
      this.glassCategoryService.addGlassCategory(categoryModel).subscribe(Response =>{
      
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
      this.toastrService.error("Formunuz Hatalıdır","Başarısız")
    }

  }
  

}
