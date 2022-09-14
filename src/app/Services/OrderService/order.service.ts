import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token:any;

  constructor(private http : HttpService) {
    this.token = localStorage.getItem('token');
   }

  getOrders(){
    console.log("Getting wishlist");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.GetService('Getorders',true,header)
  }

  placeOrder(data:any){
    console.log("Placing order");
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('Placeorder',data,true,header)
  }
}
