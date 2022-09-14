import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/Services/BookSevice/book.service';
import { DataService } from 'src/app/Services/DataService/data.service';
@Component({
  selector: 'app-get-all-books',
  templateUrl: './get-all-books.component.html',
  styleUrls: ['./get-all-books.component.scss']
})
export class GetAllBooksComponent implements OnInit {
  bookList:any;
  sortBy:any="Sort by relevence";
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  searchString:any;
  totalbooks:any;
  page: number = 1;
  
  constructor(private bookser:BookService,private dataser:DataService) { }

  ngOnInit(): void {
    
    this.dataser.currentMessage.subscribe((response: any) => {
      this.searchString = response
    })
    this.getAllBooks();
  }

  getAllBooks(){
    this.bookser.getAllBooks().subscribe((response: any) => {
      console.log("Got All Books", response.data);
      this.totalbooks= response.data.length;
      this.bookList = response.data;
    });
  }

  relevence(){  
    this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";
  }

  PriceLowToHigh(){
    this.bookList = this.bookList.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.bookList = this.bookList.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
     this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="Newest First";
  }
  
  quickView(bookId:any){
    localStorage.setItem('bookId',bookId)
  }
}
