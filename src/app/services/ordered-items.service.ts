import { Injectable } from '@angular/core';

interface Order {
  items: any[]; // Adjust the type according to your item structure
  total: number;
  deliveryFee: number;
  deliveryOption: string;
  deliveryInstruction: string;
}

@Injectable({
  providedIn: 'root',
})
export class OrderedItemsService {
  private orders: Order[] = []; // Store all completed orders

  // Add a new order to the list
  addOrder(order: Order): void {
    this.orders.push(order); // Append to the array
    console.log('Order added:', order); // For debugging
  }

  // Retrieve all orders
  getOrderedItems(): Order[] {
    return this.orders; // Return the entire list of orders
  }
}
