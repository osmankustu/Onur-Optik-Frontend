import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
     private toastrService:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm()
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  login(){
    
    if(this.loginForm.valid){
      let loginModel = Object.assign({},this.loginForm.value)

      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.success(response.message)
        localStorage.setItem("token",response.data.token)
        if(response.success){
          this.router.navigate(['dashboard'])
          //Auth Finish notif
           let exp =response.data.expiration
          this.toastrService.info("Oturumunuz 24 saat Sonra Sonlandırılılacaktır","BİLGİ",{
            timeOut:8000,
          })
          
        }
        else{
          this.router.navigate(['login'])
        }
      },responseError =>{
        this.toastrService.error(responseError.error)
      })
    }
  }



}
