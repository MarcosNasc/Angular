import { ProductItem } from "./ProductItem";

  export class Product {
    products: ProductItem[];
    total: number;
    skip: number;
    limit: number;
  
    constructor(products: ProductItem[], total: number, skip: number, limit: number) {
      this.products = products;
      this.total = total;
      this.skip = skip;
      this.limit = limit;
    }
  }