import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { ProductItem } from './ProductItem';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http: HttpClient) {}

  protected UrlServiceV1: string = "https://dummyjson.com";

  getProducts(): Observable<Product> {
    let products = this.http.get<Product>(this.UrlServiceV1 + "/products");
    return products;
  }
}
