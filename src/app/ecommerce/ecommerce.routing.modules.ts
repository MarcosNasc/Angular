import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EcommerceAppComponent } from './ecommerce.app.component';
import { ProductResolve } from './products/Services/product.resolve';

const routes: Routes = [
  {path:"" , component: EcommerceAppComponent,
    children:[
      {path:"", redirectTo:"all" , pathMatch:'full'},
      {
        path:":state", 
        component:ProductsComponent , 
        resolve : { products: ProductResolve } ,
        data: {
          teste:"informação"
        }
      },
      {path:"edit/:id", component:EditProductComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
