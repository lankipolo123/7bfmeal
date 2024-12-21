import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './login.page'; // Import the LoginPage component

@NgModule({
  declarations: [LoginPage],  // Declare LoginPage here
  imports: [CommonModule, IonicModule, ReactiveFormsModule],  // Include ReactiveFormsModule for forms
})
export class LoginPageModule {}
