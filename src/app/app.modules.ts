import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.modules';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './institucional/about/about.component';
import { ContactComponent } from './institucional/contact/contact.component';
import { provideHttpClient } from '@angular/common/http';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { RegisterComponent } from './demos/reactiveForms/register/register.component';
import { NavigationModule } from './navegation/navigation.module';
import { EcommerceModule } from './ecommerce/ecommerce.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './services/app.guard';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    DataBindingComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NavigationModule,
    EcommerceModule,
    AdminModule,
  ],
  providers: [
    provideHttpClient(),
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
