import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import FrameBrand from '../../models/FrameBrand';
import { FramebrandService } from '../../services/framebrand.service';

@Component({
  selector: 'app-framebrandlist',
  templateUrl: './framebrandlist.component.html',
  styleUrls: ['./framebrandlist.component.css']
})
export class FramebrandlistComponent implements OnInit {

  Brands:FrameBrand[]=[]
  constructor(
    private frameBrandService:FramebrandService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.frameBrandService.getFrameBrand().subscribe(response => {
      this.Brands = response.data
      if(response.success){
        this.toastrService.success(response.message,"Başarılı")
      }
      else{
        this.toastrService.error("Bir Hata Oluştu","Başarısız")
      }
    })
  }

}
