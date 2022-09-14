import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  BaseUrl = environment.BASEURL
  constructor(private httpclient:HttpClient) { }

  PostService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpclient.post(this.BaseUrl + url, data, token && httpHeadersOptions)
  }
  
  GetService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.get(this.BaseUrl + url,token && httpHeadersOptions)
  }

  PutService(url: string, data: any, token: boolean, httpHeadersOptions: any) {
    console.log(data);
    return this.httpclient.put(this.BaseUrl + url, data, token && httpHeadersOptions)
  }

  DeleteService(url: string, token: boolean, httpHeadersOptions: any) {
    return this.httpclient.delete(this.BaseUrl + url,token && httpHeadersOptions)
  }
}
