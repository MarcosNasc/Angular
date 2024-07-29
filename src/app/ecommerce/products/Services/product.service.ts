import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Product';
import { ProductCard } from '../../product-card/ProductCard';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "https://dummyjson.com";

  getProducts(state: string): Observable<Product> {
    let products = this.http.get<Product>(this.UrlServiceV1 + "/products");
    return products;
  }

  getProductById(id: number): Promise<ProductCard> {
    return fetch(this.UrlServiceV1 + '/products/' + id)
      .then(response => response.json())
  }
}
