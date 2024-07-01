import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCardComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
