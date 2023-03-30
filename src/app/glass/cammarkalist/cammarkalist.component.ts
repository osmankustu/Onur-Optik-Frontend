import { Component, OnInit } from '@angular/core';
import { GlassbrandService } from '../../services/glassbrand.service';
import GlassBrand from '../../models/GlassBrand';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cammarkalist',
  templateUrl: './cammarkalist.component.html',
  styleUrls: ['./cammarkalist.component.css']
})
export class CammarkalistComponent implements OnInit {
 Brands:GlassBrand[]=[]
 dataLoaded = false
  constructor(
    private glassService:GlassbrandService,
    private toastrService:ToastrService
  ) { }

  ngOnInit(): void {
    this.getGlassBrandList();
  }


  getGlassBrandList(){

    this.glassService.getGlassBrand().subscribe(response =>{

      this.Brands = response.data;
      this.dataLoaded = response.success
      if(response.success){
        this.toastrService.show(response.message,"Başarılı")
      }
      
    })
  }

  

}
