import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs-compat';
import { listResponseModel } from '../models/listResponseModel';
import { Customer } from '../models/Customer';
import { responseModel } from '../models/responseModel';
import { singleResponseModel } from '../models/singleResponseModel';
import BornToday from '../models/DTOs/bornToday';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  //apiUrl ="https://osmankustu.cf/api/";
  apiUrl = "https://localhost:7107/api/";

  constructor(private httpClient:HttpClient) { }

  
  getCustomer():Observable<listResponseModel<Customer>>{

    let newPath = this.apiUrl + "Customer/getall"
    return  this.httpClient.get<listResponseModel<Customer>>(newPath);
    
  }

  addCustomer(customer:Customer):Observable<responseModel>{
    return this.httpClient.post<responseModel>(this.apiUrl +"Customer/add",customer)
  }

  customerGetById(musteriId:number):Observable<singleResponseModel<Customer>>{
    let newPath = this.apiUrl + "Customer/getbyıd?id=" + musteriId;
    return this.httpClient.get<singleResponseModel<Customer>>(newPath);
  }

  getBornToday():Observable<listResponseModel<BornToday>>{
    return this.httpClient.get<listResponseModel<BornToday>>(this.apiUrl + "Customer/getBornToday")
  }

  customerUpdate(customer:Customer):Observable<responseModel>{
    let newPath = this.apiUrl +"Customer/Update";
    console.log(customer);
    
    return this.httpClient.put<responseModel>(newPath,customer);

  }

}
