import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { FramebrandService } from '../../services/framebrand.service';

@Component({
  selector: 'app-frameadd',
  templateUrl: './frameadd.component.html',
  styleUrls: ['./frameadd.component.css']
})
export class FrameaddComponent implements OnInit {
  frameAddForm:FormGroup
  constructor(
    private frameBrandService:FramebrandService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.createFrameAdd();
  }

  createFrameAdd(){
    this.frameAddForm = this.formBuilder.group({
      brandId:0,
      markaAdi:["",Validators.required]
    })
    
  }
  
  add(){
    if(this.frameAddForm.valid){
      let frameModel = Object.assign({},this.frameAddForm.value);
      this.frameBrandService.addFrameBrand(frameModel).subscribe(response => {
          this.toastrService.success(response.message,"Başarılı")
      },responseError =>{
        if(responseError.error.Errors.length>0){
          
          for(let i= 0 ; i <responseError.error.Errors.length; i++){
            
            this.toastrService.error(responseError.error.Errors[i].ErrorMessage,"Doğrulama Hatası !");  
          }
        }
      })
    }
    else{
      this.toastrService.error("Formunuz Hatalıdır ","Başarısız !!")
    }
  }

}
