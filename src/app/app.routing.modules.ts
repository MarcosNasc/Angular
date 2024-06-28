import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegation/home/home.component';
import { AboutComponent } from './institucional/about/about.component';
import { ContactComponent } from './institucional/contact/contact.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';

const routes: Routes = [
    { path: '', redirectTo: '/home' , pathMatch:'full'},
    { path:'home' , component : HomeComponent},
    { path:'about' , component : AboutComponent},
    { path:'contact' , component : ContactComponent},
    { path:'products' , component : ProductsComponent},    
    { path:'feature-data-binding' , component : DataBindingComponent},    
    { path:'register', component:RegisterComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

