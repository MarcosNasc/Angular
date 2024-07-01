import { ProductCard } from "../product-card/ProductCard";

  export class Product {
    products: ProductCard[];
    total: number;
    skip: number;
    limit: number;
  
    constructor(products: ProductCard[], total: number, skip: number, limit: number) {
      this.products = products;
      this.total = total;
      this.skip = skip;
      this.limit = limit;
    }
  }