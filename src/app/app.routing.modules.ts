import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './navegation/home/home.component';
import { AboutComponent } from './institucional/about/about.component';
import { ContactComponent } from './institucional/contact/contact.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';
import { NotFoundComponent } from './navegation/not-found/not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/home' , pathMatch:'full'},
    { path:'home' , component : HomeComponent},
    { path:'about' , component : AboutComponent},
    { path:'contact' , component : ContactComponent},
    { path:'products' , 
      loadChildren:() => import("./ecommerce/ecommerce.module")
      .then(m => m.EcommerceModule)},    
      { path:'feature-data-binding' , component : DataBindingComponent},    
      { path:'register', component:RegisterComponent},
      
      { path: '**' , component: NotFoundComponent}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

