import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs-compat';
import { listResponseModel } from '../models/listResponseModel';
import Glasses from '../models/Glasses';
import { responseModel } from '../models/responseModel';
import GlassesDetailDto from '../models/DTOs/GlassesDetailDto';
import soldGlassesDto from '../models/DTOs/SoldGlassesDto';
import prescriptNotficationDto from '../models/DTOs/prescriptNotficationDto';
import GlassesSatisDetaliDto from '../models/DTOs/GlassesSatisDetailDto';
import { singleResponseModel } from '../models/singleResponseModel';
import SoldGlassesCount from '../models/SoldGlassesCount';

@Injectable({
  providedIn: 'root'
})
export class SatisService {

  ///apiUrl ="https://osmankustu.cf/api/";
  apiUrl = "https://localhost:7107/api/";
  constructor(
    private httpClient:HttpClient
    ) { }


  getSatis():Observable<listResponseModel<GlassesDetailDto>>{
    return this.httpClient.get<listResponseModel<GlassesDetailDto>>(this.apiUrl + "Glasses/GetGlassesDetail");
  }

  getByIdSatis(MusteriId:number):Observable<listResponseModel<soldGlassesDto>>{
    return this.httpClient.get<listResponseModel<soldGlassesDto>>(this.apiUrl +"Glasses/getByMusteriId?musteriId=" +MusteriId);
  }

  getGlassesById(glassesId):Observable<listResponseModel<GlassesSatisDetaliDto>>{

    return this.httpClient.get<listResponseModel<GlassesSatisDetaliDto>>(this.apiUrl + "Glasses/getByIdOfGlassesDetail?glassesId="+glassesId);
  }

  addSatis(glasses:Glasses):Observable<responseModel>{
    return this.httpClient.post<responseModel>(this.apiUrl+"Glasses/add",glasses);
  }

  getPrescriptNotfication():Observable<listResponseModel<prescriptNotficationDto>>{
    return this.httpClient.get<listResponseModel<prescriptNotficationDto>>(this.apiUrl +"Glasses/GetRecipeNotEntered");
  }

  getSoldGlassesCount():Observable<singleResponseModel<SoldGlassesCount>>{
      
    return this.httpClient.get<singleResponseModel<SoldGlassesCount>>(this.apiUrl+"Glasses/getCount");
  }

  updateSatis(glasses:Glasses):Observable<responseModel>{
    let newPath = this.apiUrl +"Glasses/update";
    return this.httpClient.put<responseModel>(newPath,glasses);
  }

  getSonSatislar():Observable<listResponseModel<GlassesDetailDto>>{
      let newPath = this.apiUrl +"Glasses/getSonSatislar";
    return this.httpClient.get<listResponseModel<GlassesDetailDto>>(newPath);
  }
}
