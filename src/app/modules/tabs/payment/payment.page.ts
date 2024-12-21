import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PaymentService } from '../../../services/payment.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  cartItems: any[] = [];
  subtotal: number = 0;
  deliveryFee: number = 49;
  total: number = 0;
  selectedDeliveryOption: string = 'standard';
  deliveryInstruction: string = '';

  private deliveryOptions: Record<string, number> = {
    saver: 59,
    standard: 49,
    priority: 69,
  };

  constructor(
    private cartService: CartService,
    private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.cartItems = JSON.parse(params['items'] || '[]');
      this.total = +params['total'] || 0;
      this.deliveryFee = +params['deliveryFee'] || this.deliveryFee;
      this.selectedDeliveryOption = params['selectedDeliveryOption'] || this.selectedDeliveryOption;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.subtotal = this.cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
    this.deliveryFee = this.deliveryOptions[this.selectedDeliveryOption];
    this.total = this.subtotal + this.deliveryFee;
  }

  onDeliveryOptionChange() {
    this.deliveryFee = this.deliveryOptions[this.selectedDeliveryOption];
    this.calculateTotal();
  }

  placeOrder() {
    const order = {
      items: this.cartItems,
      total: this.total,
      deliveryFee: this.deliveryFee,
      deliveryOption: this.selectedDeliveryOption,
      deliveryInstruction: this.deliveryInstruction,
    };
    // Simulate successful payment
    if (this.paymentService.processPayment(order)) {
      this.paymentService.handleOrder(order); // Save order to OrderedItemsService
      this.cartService.clearCart(); // Clear the cart immediately after order
      alert('Order placed successfully!');
      this.router.navigate(['tabs/profile']); // Navigate to profile
    } else {
      alert('Payment failed. Please try again.');
    }
  }

  cancelOrder() {
    this.cartItems.forEach(item => {
      this.cartService.addToCart(item.product, item.quantity); // Return items to cart
    });
    this.router.navigate(['tabs/cart']); // Navigate back to cart page
  }
}
