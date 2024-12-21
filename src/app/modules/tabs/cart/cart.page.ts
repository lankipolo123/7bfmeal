import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage {
  cartItems: any[] = [];
  subtotal: number = 0;
  deliveryFee: number = 49; // Flat delivery fee
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {}

  // Runs every time the cart page is displayed
  ionViewWillEnter() {
    this.loadCart();
  }

  loadCart() {
    this.cartItems = this.cartService.getCartItems(); // Fetch cart items
    this.calculateTotal(); // Recalculate totals
  }

  calculateTotal() {
    this.subtotal = this.cartService.calculateTotal(); // Calculate subtotal
    this.total = this.subtotal + this.deliveryFee; // Add delivery fee
  }

  increaseQuantity(item: any) {
    item.quantity++; // Increase quantity
    this.calculateTotal(); // Update total
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--; // Decrease quantity
      this.calculateTotal(); // Update total
    }
  }

  removeItem(item: any) {
    this.cartService.removeItem(item.product.id); // Remove item from cart
    this.loadCart(); // Reload cart
  }

  clearCart() {
    this.cartService.clearCart(); // Clear cart
    this.loadCart(); // Reload cart
  }

  proceedToPayment() {
    const items = this.cartItems.map(item => ({
      product: item.product,
      quantity: item.quantity,
    }));

    this.router.navigate(['tabs/payment'], {
      queryParams: { 
        total: this.total, 
        deliveryFee: this.deliveryFee, 
        items: JSON.stringify(items),
      }
    });
  }
}
