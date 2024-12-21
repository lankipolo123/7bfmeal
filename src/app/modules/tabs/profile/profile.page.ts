import { Component, OnInit } from '@angular/core';
import { OrderedItemsService } from '../../../services/ordered-items.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userName: string = 'John Doe'; // User's name
  orderedItems: any[] = []; // Store all orders

  constructor(private orderedItemsService: OrderedItemsService) {}

  ngOnInit() {
    this.loadProfile(); // Load user data
    this.loadOrderedItems(); // Load all orders
  }

  loadProfile() {
    // Here you can load the user's profile data
    this.userName = 'John Doe'; // Replace with actual user data
  }

  loadOrderedItems() {
    this.orderedItems = this.orderedItemsService.getOrderedItems(); // Fetch all orders
  }

  updateProfile() {
    alert(`Profile updated! Name: ${this.userName}`);
  }
}
