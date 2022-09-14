import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : any;

  constructor(private httpservice:HttpService) { 
    this.token = localStorage.getItem("token");
  }

  Register(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('Register',data,false,httpOptions)
  }
  Login(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('Login',data,true,httpOptions)  
  }
  
  Forgotpassword(data: any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      })
    }
    return this.httpservice.PostService('Forgotpassword?email=' +data.email,data,true,httpOptions)
  }
  Resetpassword(data: any,token:any){
    console.log(data);
    let httpOptions = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
      })
    }
    return this.httpservice.PostService('Resetpassword',data,true,httpOptions)
  }
}
