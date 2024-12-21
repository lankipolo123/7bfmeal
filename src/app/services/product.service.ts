import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string; // Add this line for optional description
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Blueberry Granola Cereal Delight', price: 104, image: 'assets/Blueberry Granola Cereal Delight.jpg', description: 'A delightful blend of crunchy granola and fresh blueberries, perfect for a healthy breakfast.' },
    { id: 2, name: 'Buttermilk Waffles', price: 99, image: 'assets/Buttermilk Waffles.jpg', description: 'Fluffy waffles made with buttermilk, served with maple syrup and a dusting of powdered sugar.' },
    { id: 3, name: 'Cheezy Vegetable Omelet', price: 89, image: 'assets/Cheezy Vegtable Omelet with Mushroom inside.jpg', description: 'A delicious omelet filled with a blend of cheeses and fresh vegetables, including mushrooms and bell peppers.' },
  
    { id: 4, name: 'Crispy Chicken Fillet on Cilantro Rice', price: 79, image: 'assets/Crispy Chicken Fillet on Cilantro Rice.jpg', description: 'Juicy chicken fillet, breaded and fried to perfection, served on a bed of fragrant cilantro rice.' },
    { id: 5, name: 'Honey Drizzle Pancake', price: 79, image: 'assets/Honey Drizle Pancake.jpg', description: 'Fluffy pancakes drizzled with warm honey and topped with butter, a sweet start to your day.' },
    { id: 6, name: 'Creamy Mac & Cheese', price: 79, image: 'assets/Creamy Mac & Cheese.jpg', description: 'Rich and creamy macaroni and cheese made with a blend of cheeses for ultimate comfort food.' },
  
    { id: 7, name: 'Savory Steak and Mushroom', price: 79, image: 'assets/Savory Steak and Mushroom.jpg', description: 'Tender steak sautéed with fresh mushrooms, served with a side of vegetables and a savory sauce.' },
    { id: 8, name: 'Vegetable-Packed Sandwich Delight', price: 79, image: 'assets/Vegetable-Packed Sandwich Delight.jpg', description: 'A hearty sandwich filled with a variety of fresh vegetables, herbs, and a zesty dressing.' },
    { id: 9, name: 'Vibrant Salad Breakfast Bowl', price: 79, image: 'assets/Vibrant Salad Breakfast Bowl.jpg', description: 'A colorful breakfast bowl featuring mixed greens, cherry tomatoes, cucumbers, and a light vinaigrette.' }
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }
}