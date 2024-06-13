import { Component , LOCALE_ID , DEFAULT_CURRENCY_CODE} from "@angular/core";
import { ProductService } from "./product.service";
import { ProductItem } from "./ProductItem";
import { TitleCasePipe , CurrencyPipe } from "@angular/common";
import ptBr from '@angular/common/locales/pt';
import {  registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);


@Component({
  selector: "app-products",
  standalone: true,
  imports: [TitleCasePipe,CurrencyPipe],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class ProductsComponent {
  public products?: ProductItem[];


  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.products;
        console.log(this.products)
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
