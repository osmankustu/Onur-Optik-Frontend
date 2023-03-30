import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import GlassBrand from '../models/GlassBrand';
import GlassCategory from '../models/GlassCategory';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { singleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GlasscategoryService {
  apiUrl = "https://localhost:7107/api/";
  //apiUrl="https://osmankustu.cf/api/";
  constructor(private httpClient:HttpClient) { }

  getGlassCategory():Observable<listResponseModel<GlassCategory>>{

    let newPath= this.apiUrl + "GlassCategory/getall";
    return this.httpClient.get<listResponseModel<GlassCategory>>(newPath);
  }

  addGlassCategory(GlassBrand:GlassBrand):Observable<responseModel>{

    return this.httpClient.post<responseModel>(this.apiUrl+"GlassCategory/add",GlassBrand)
  }

  getGlassesCategoryById(categoryId:number):Observable<singleResponseModel<GlassCategory>>{

    let newPath = this.apiUrl +"GlassCategory/getById?Id="+categoryId;
    return this.httpClient.get<singleResponseModel<GlassCategory>>(newPath);
  }

  updateGlassCategory(glassCategory:GlassCategory):Observable<responseModel>{
    let newPath = this.apiUrl +"GlassCategory/update";
    return this.httpClient.put<responseModel>(newPath,glassCategory);
  }

}
