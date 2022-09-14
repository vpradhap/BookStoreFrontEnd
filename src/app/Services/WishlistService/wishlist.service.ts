import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../HttpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token:any;

  constructor(private http: HttpService) { 
    this.token = localStorage.getItem('token');
  }

  getWishlist(){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.GetService('Getwishlistitem',true,header)
  }

  addToWishlist(reqData:any ,bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('Addtowishlist?bookId='+bookId, reqData, true, header);
  }

  removeFromWishlist(wishlistId:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.DeleteService('Removefromwishlist?wishlistId='+wishlistId,true,header)
  }
}
