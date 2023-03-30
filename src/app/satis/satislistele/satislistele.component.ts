import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import GlassesSatisDetaliDto from '../../models/DTOs/GlassesSatisDetailDto';
import GlassesDetailDto from '../../models/DTOs/GlassesDetailDto';
import { SatisService } from '../../services/satis.service';

@Component({
  selector: 'app-satislistele',
  templateUrl: './satislistele.component.html',
  styleUrls: ['./satislistele.component.css']
})
export class SatislisteleComponent implements OnInit {

  satis:GlassesDetailDto[]=[]
  dtos:GlassesSatisDetaliDto[]=[]
  constructor(
    private satisService:SatisService,
    private toastrService:ToastrService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["glassesId"]){
        this.getGlassesDetail(params["glassesId"])
      }else{
        this.getSatis();
      }
      
    })
    
        
    
   
  }

  getGlassesDetail(glassesId:Number){

    this.satisService.getGlassesById(glassesId).subscribe(response => {

      this.dtos = response.data
    })

    
  }

  getSatis(){

    this.satisService.getSatis().subscribe(response => {
      this.satis = response.data
      this.toastrService.success(response.message,"Başarılı")
      

    })
  }

}
