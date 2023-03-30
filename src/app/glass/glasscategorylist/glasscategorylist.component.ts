import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import GlassCategory from '../../models/GlassCategory';
import { GlasscategoryService } from '../../services/glasscategory.service';

@Component({
  selector: 'app-glasscategorylist',
  templateUrl: './glasscategorylist.component.html',
  styleUrls: ['./glasscategorylist.component.css']
})
export class GlasscategorylistComponent implements OnInit {
  Categories:GlassCategory[]=[]
  dataLoaded = false
  constructor(
    private glassCategoryService:GlasscategoryService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getGlassCategory()
  }

  getGlassCategory(){
    this.glassCategoryService.getGlassCategory().subscribe(response =>{

      this.Categories = response.data
      this.dataLoaded = response.success
      if(response.success){
        this.toastrService.success(response.message,"Başarılı")
      }
      else{
        this.toastrService.error(response.message,"Başarısız")
      }
      
    })
  }

}
