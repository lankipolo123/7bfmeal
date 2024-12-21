import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupPage } from './signup.page'; // Import the SignupPage component

@NgModule({
  declarations: [SignupPage],  // Declare SignupPage here
  imports: [CommonModule, IonicModule, ReactiveFormsModule],  // Include ReactiveFormsModule for forms
})
export class SignupPageModule {}
