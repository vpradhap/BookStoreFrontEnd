import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/WishlistService/wishlist.service';
@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishlist:any;
  defaultImage:any="https://www.prachiindia.com/ModuleFiles/Items/Cover_image.png";
  constructor(private wish:WishlistService) { }

  ngOnInit(): void {
    this.getWishlist();
  }

  getWishlist(){
    this.wish.getWishlist().subscribe((response: any) => {
      console.log("Got All wishlist Books", response.data);
      this.wishlist = response.data;
    });
  }

  removeFromWishlist(wishistId:any){
    this.wish.removeFromWishlist(wishistId).subscribe((response: any) => {
      console.log("Removed",response.data);
      this.getWishlist();
    });
  }
}
