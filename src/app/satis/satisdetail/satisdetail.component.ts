import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import  GlassesSatisDetaliDto  from '../../models/DTOs/GlassesSatisDetailDto';

import { SatisService } from '../../services/satis.service';

@Component({
  selector: 'app-satisdetail',
  templateUrl: './satisdetail.component.html',
  styleUrls: ['./satisdetail.component.css']
})
export class SatisdetailComponent implements OnInit {

  datas:GlassesSatisDetaliDto[]=[]
  constructor(
    private activatedRoute:ActivatedRoute,
    private toastrService:ToastrService,
    private satisService:SatisService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["glassesId"]){
        this.getSatisDetail(params["glassesId"]);
      }
    })
  }

  getSatisDetail(glassesId:number){
    this.satisService.getGlassesById(glassesId).subscribe(response => {
      
      this.datas = response.data
    })
  }
}
