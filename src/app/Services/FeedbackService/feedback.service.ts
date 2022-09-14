import { Injectable } from '@angular/core';
import { HttpService } from '../HttpService/http.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  token:any;

  constructor(private http:HttpService) { 
    this.token = localStorage.getItem('token');
  }

  addFeddback(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.http.PostService('Addfeedback', reqData, true, header);
  }

  getAllFeedback(bookId:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    }
    return this.http.GetService(`Getfeedback?bookId=` +bookId,false,header)
  }
}
