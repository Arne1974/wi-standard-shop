import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart;
  constructor(
    private http: HttpClient
  ) { }
  getCart() {
    return this.cart;
  }
}
