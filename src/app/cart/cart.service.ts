import { Injectable } from '@angular/core';
import { Cart } from './cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart;
  constructor() { }
  getCart() {
    return this.cart;
  }
}