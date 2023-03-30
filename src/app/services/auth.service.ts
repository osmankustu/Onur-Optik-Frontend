import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { singleResponseModel } from '../models/singleResponseModel';
import { TokenModel } from '../models/TokenModel';
import { LoginModel } from '../models/LoginModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  //apiUrl ="https://osmankustu.cf/api/Auth/";
  apiUrl = 'https://localhost:7107/api/Auth/';
  constructor(private httpClient:HttpClient) { }

  login(loginModel:LoginModel){
    return this.httpClient.post<singleResponseModel<TokenModel>>(this.apiUrl+"login",loginModel)
  }

  isAuthenticated(){
    if(localStorage.getItem("token")){
      return true;
    }
    else{
      return false;
    }
  }
}
