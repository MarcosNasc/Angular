import { Component , LOCALE_ID , DEFAULT_CURRENCY_CODE, ViewChild, ElementRef, QueryList, ViewChildren} from "@angular/core";
import { ProductService } from "./Services/product.service";
import ptBr from '@angular/common/locales/pt';
import {  registerLocaleData } from '@angular/common';
import { ProductCard } from "../product-card/ProductCard";
import { fromEvent, Observable } from "rxjs";
import { ProductCardComponent } from "../product-card/product-card.component";
import { ActivatedRoute } from "@angular/router";
registerLocaleData(ptBr);


@Component({
  selector: "app-products",
  standalone: false,
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class ProductsComponent {
  public products?: ProductCard[];

  @ViewChild('test',{static: false}) screenMessage ?: ElementRef;
  @ViewChildren(ProductCardComponent) productCards ?: QueryList<ProductCardComponent>;


  constructor(private productService: ProductService,
              private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.productService.getProducts().subscribe({
    //   next: (response) => {
    //     this.products = response.products;
    //     this.products.forEach(product => {
    //       product.status = true;
    //     });
    //     // console.log(this.products)
    //   },
    //   error:(error)=> {
    //     console.error(error);
    //   }
    // });
    this.products = this.route.snapshot.data['products'];
    console.log(this.route.snapshot.data['teste']);
  }

  ngAfterViewInit() {
    let clickText : Observable<any> = fromEvent(this.screenMessage?.nativeElement,'click');
    clickText.subscribe(() => {
      alert("click here!");
      return;
    })

    // console.log(this.productCards)
    this.productCards?.forEach(p => {
      //console.log(p.product);
    })
  }
  

  changeStatus(event: ProductCard){
    event.status = !event.status;
    console.log(event)
  }
}
