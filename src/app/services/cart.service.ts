import { Injectable } from '@angular/core';
import { Product } from './product.service'; // Adjust the import path as necessary

interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  addToCart(product: Product, quantity: number): void {
    const existingProduct = this.cart.find(item => item.product.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += quantity; // Update quantity if exists
    } else {
      this.cart.push({ product, quantity }); // Add new item to cart
    }
  }

  calculateTotal(): number {
    return this.cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
  clearCart(): void {
    this.cart = []; // Clear all items from the cart
    console.log('Cart cleared'); // For debugging
  }

  getCartItems(): CartItem[] {
    return this.cart;
  }

  removeItem(productId: number): void {
    this.cart = this.cart.filter(item => item.product.id !== productId);
  }
}