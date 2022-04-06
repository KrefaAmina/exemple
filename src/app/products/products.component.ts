import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productList: Product[];
  priceMax: number;
  constructor() { }

  ngOnInit(): void {
    this.productList = [
      { id: 1, title: "T-shirt 1", price: 10, quantity: 0, like: 0 },
      { id: 2, title: "T-shirt 2", price: 20, quantity: 5, like: 5 },
      { id: 3, title: "T-shirt 3", price: 30, quantity: 10, like: 2 }
    ];
  }
  buyProduct(i: number) {
    this.productList[i].quantity--;
  }
  incrementLik(i: number) {
    this.productList[i].like++;
  }


}
