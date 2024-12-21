import { Injectable } from '@angular/core';
import { OrderedItemsService } from './ordered-items.service';

interface Order {
  items: any[];
  total: number;
  deliveryFee: number;
  deliveryOption: string;
  deliveryInstruction: string;
}

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private orderedItemsService: OrderedItemsService) {}

  processPayment(order: Order): boolean {
    console.log('Processing payment for order:', order);
    // Simulate successful payment
    return true;
  }

  handleOrder(order: Order): void {
    this.orderedItemsService.addOrder(order); // Add the order to the service
  }

  cancelPayment(order: Order): void {
    console.log('Payment canceled. Order details:', order);
    // Add logic to return items to the cart if needed
  }
}
