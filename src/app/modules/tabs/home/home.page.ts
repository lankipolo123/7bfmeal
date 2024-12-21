import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../../services/product.service';
import { CartService } from '../../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts(); // Load products
  }

  addToCart(product: Product) {
    // Add product to cart with a default quantity of 1
    this.cartService.addToCart(product, 1);
    alert(`${product.name} added to cart!`); // Notify user
  }

  viewProduct(product: Product) {
    this.router.navigate(['/tabs/product-details', product.id]); // Navigate to product details
  }
}