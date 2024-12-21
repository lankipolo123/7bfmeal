import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService, Product } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  product: Product | undefined;
  quantity: number = 1; // Default quantity

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId !== null) {
      this.product = this.productService.getProducts().find(p => p.id === +productId);
      if (!this.product) {
        console.error('Product not found');
      }
    } else {
      console.error('Product ID is null or undefined');
    }
  }

  addToCart() {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      alert(`${this.product.name} added to cart with quantity: ${this.quantity}`);
    } else {
      alert('Cannot add to cart: Product is undefined or quantity is invalid');
    }
  }

  buyNow() {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart(this.product, this.quantity);
      this.router.navigate(['tabs/cart']);
    } else {
      alert('Cannot buy: Product is undefined or quantity is invalid');
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    } else {
      alert('Quantity cannot be less than 1');
    }
  }
}