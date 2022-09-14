import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  token:any;
  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token')
   }

   getAllBooks(){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.GetService('Getallbooks',true,header)
  }

  getBookById(bookId:any){
    console.log("Getting books");

    let header={
      headers: new HttpHeaders({
        'Content-Type' : 'application/json',
      })
    }
    return this.http.GetService('GetbookbyId?bookId=' +bookId,true,header)
  }
}
