import { Routes } from '@angular/router';
import { HomeComponent } from './institucional/home/home.component';
import { AboutComponent } from './institucional/about/about.component';
import { ContactComponent } from './institucional/contact/contact.component';
import { ProductsComponent } from './institucional/products/products.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home' , pathMatch:'full'},
    { path:'home' , component : HomeComponent},
    { path:'about' , component : AboutComponent},
    { path:'contact' , component : ContactComponent},
    { path:'products' , component : ProductsComponent},    
    { path:'feature-data-binding' , component : DataBindingComponent},    
];
