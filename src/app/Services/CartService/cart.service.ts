import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;
  constructor(private http: HttpService) {
    this.token = localStorage.getItem('token');
  }

  getCartItems() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.GetService('Getcartitem', true, header);
  }

  addToCart(reqData: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PostService('Addtocart', reqData, true, header);
  }

  updateCart(cartId: any, bookQty: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.PutService('Updatecart?cartId=' + cartId + '&bookQty=' + bookQty, cartId, true, header);
  }

  removeFromCart(cartId: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.http.DeleteService('Removefromcart?cartId='+cartId, true, header);
  }
}
