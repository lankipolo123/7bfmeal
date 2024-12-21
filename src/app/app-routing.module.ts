import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/tabs/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/tabs/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/tabs/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'product-details/:id', // Changed to include the :id parameter
    loadChildren: () => import('./modules/tabs/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./modules/tabs/payment/payment.module').then( m => m.PaymentPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./modules/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
