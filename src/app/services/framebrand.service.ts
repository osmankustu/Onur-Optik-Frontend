import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { observable } from 'rxjs/internal-compatibility';
import FrameBrand from '../models/FrameBrand';
import { listResponseModel } from '../models/listResponseModel';
import { responseModel } from '../models/responseModel';
import { singleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class FramebrandService {

  apiUrl = "https://localhost:7107/api/";
  //apiUrl="https://osmankustu.cf/api/";
  constructor(
    private httpClient:HttpClient
    ) { }

  getFrameBrand():Observable<listResponseModel<FrameBrand>>{

    return this.httpClient.get<listResponseModel<FrameBrand>>(this.apiUrl + "FrameBrands/GetAll")
  }

  addFrameBrand(frameBrand:FrameBrand):Observable<responseModel>{

    return this.httpClient.post<responseModel>(this.apiUrl + "FrameBrands/add",frameBrand)
  }

  getByIdFrameBrand(brandId:number):Observable<singleResponseModel<FrameBrand>>{
      let newPath = this.apiUrl + "FrameBrands/getById?id="+brandId;

      return this.httpClient.get<singleResponseModel<FrameBrand>>(newPath);
    }

  updateFrameBrand(frameBrand:FrameBrand):Observable<responseModel>{
    let newPath = this.apiUrl+"FrameBrands/Update"
    return this.httpClient.put<responseModel>(newPath,frameBrand);
  }
}
