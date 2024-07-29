import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { ProductService } from "./product.service";
import { ProductCard } from "../../product-card/ProductCard";
import { map, Observable } from "rxjs";
import { Product } from "../Product";

@Injectable()
export class ProductResolve  {

    constructor(private productService : ProductService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ProductCard[]> {
        let products;

         products = this.productService.getProducts(route.params["state"])
          .pipe(
            map((product: Product) => product.products.map(
              p => ({
                ...p,
                status: this.generateRandom()
              })
            ))
          );

          return products;
      }

      generateRandom() : boolean {
        let random = Math.floor(Math.random() * 2);
        console.log(random)
        if(random === 1) return true;
        else return false;
      }


}