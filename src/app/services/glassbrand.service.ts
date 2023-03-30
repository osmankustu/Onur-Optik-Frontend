import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import GlassBrand from '../models/GlassBrand';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { singleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GlassbrandService {
 
  apiUrl = "https://localhost:7107/api/";
  //apiUrl="https://osmankustu.cf/api/";
  constructor(private httpClient:HttpClient) { }

  getGlassBrand():Observable<listResponseModel<GlassBrand>>{

    let newPath= this.apiUrl + "GlassBrands/getall";
    return this.httpClient.get<listResponseModel<GlassBrand>>(newPath);
  }

  addGlassBrand(GlassBrand:GlassBrand):Observable<responseModel>{

    return this.httpClient.post<responseModel>(this.apiUrl+"GlassBrands/add",GlassBrand)
  }

  getByIdGlassBrand(brandId:number):Observable<singleResponseModel<GlassBrand>>{

    let newPath=this.apiUrl+"GlassBrands/getById?Id="+brandId;
    return this.httpClient.get<singleResponseModel<GlassBrand>>(newPath);
  }

  updateGlassBrand(glassBrand:GlassBrand):Observable<responseModel>{
    let newPath = this.apiUrl +"GlassBrands/update";
    return this.httpClient.put<responseModel>(newPath,glassBrand);
  }
}
