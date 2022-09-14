import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fullName: any = '';
  search: any;
  value:any;
  constructor(private route:Router,private dataser:DataService) { }

  ngOnInit(): void {
    this.fullName = localStorage.getItem('name');
  }

  logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem('bookId');
    localStorage.removeItem('mobile')
    console.log('Logout success');
    this.route.navigateByUrl('login');
  }
  searchBook(event: any) {
    this.search=event.target.value
    this.dataser.changeMessage(event.target.value)
  }
}
