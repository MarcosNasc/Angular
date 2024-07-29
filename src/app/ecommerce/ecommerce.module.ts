import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EcommerceAppComponent } from './ecommerce.app.component';
import { ProductResolve } from './products/Services/product.resolve';
import { ProductService } from './products/Services/product.service';


@NgModule({
  declarations: [
    EcommerceAppComponent,
    ProductsComponent,
    ProductCardComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ],
  providers:[
    ProductService,
    ProductResolve
  ]
})
export class EcommerceModule { }
