import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import GlassesDetailDto from '../../models/DTOs/GlassesDetailDto';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { SatisService } from '../../services/satis.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faturaadd',
  templateUrl: './faturaadd.component.html',
  styleUrls: ['./faturaadd.component.css']
})
export class FaturaaddComponent implements OnInit {

  private id:string
  MusteriIdForm:FormGroup
  customers:Customer[]=[];
  satislar:GlassesDetailDto[]=[]
  constructor(
    private customerService:CustomerService,
    private satisService:SatisService,
    private toastrService:ToastrService,
    private formBuilder:FormBuilder,
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      if(params["musteriId"]){
        this.getGlasses(params["musteriId"]);
      }
      else{
        console.log("Hata Var")
      }
    })
    
    this.getCustomer();
    console.log(this.customers);
    this.createMusteriIdForm();
  }

  createMusteriIdForm(){
    this.MusteriIdForm = this.formBuilder.group({
      musteriId:[0,Validators.required]
    })
  }


  getId(){
    

  }

  getGlasses(musteriId:number){

    this.satisService.getByIdSatis(musteriId).subscribe(response => {
      //this.satislar = response.data
      console.log(this.satislar)
    })

  }

  getCustomer(){

    this.customerService.getCustomer().subscribe(response => {
      this.customers = response.data
    })
  }

}
