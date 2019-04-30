import { Component, OnInit, Inject } from '@angular/core';
import { _ } from '@biesbjerg/ngx-translate-extract/dist/utils/utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cart;
  constructor(
    @Inject('translate') private translate,
    @Inject('categories-service') private categoriesService,
    @Inject('cart-service') private cartService
  ) { }

  ngOnInit() {
  }

}
