import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  private cart: any[] = [];
  private count: number = 0;

  addToCart(product: any) {
    this.cart.push(product);
    this.count = 0; // Reiniciar el contador a 0
  }

  getCart() {
    return this.cart;
  }

  getCount() {
    return this.count;
  }
}


