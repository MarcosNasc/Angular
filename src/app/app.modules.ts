import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.modules';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { MenuComponent } from './navegation/menu/menu.component';
import { HomeComponent } from './institucional/home/home.component';
import { FooterComponent } from './navegation/footer/footer.component';
import { CommonModule, CurrencyPipe, NgClass, TitleCasePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './institucional/about/about.component';
import { ContactComponent } from './institucional/contact/contact.component';
import { ProductsComponent } from './institucional/products/products.component';
import { provideHttpClient } from '@angular/common/http';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    DataBindingComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgClass,
    AppRoutingModule,
    RouterOutlet,
    RouterModule,
    TitleCasePipe,
    CurrencyPipe
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
