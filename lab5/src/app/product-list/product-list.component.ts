import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  redirect(link: string){
    window.open("https://telegram.me/share/url?url=" + link)
  }
  removepr(product: any){
    if(product.show == true){
      product.show = false;
    }else{
      product.show = true;
    }
  }
  likepress(product: any){
    if(product.isLiked){
      product.likes += 1;
      product.isLiked = false;
    }
    else{
      product.likes -= 1;
      product.isLiked = true;
    }
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/