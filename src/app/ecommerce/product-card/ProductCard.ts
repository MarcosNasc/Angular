export class ProductCard {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    status : boolean;

    constructor(
       id: number,
       title: string,
       description: string,
       price: number,
       discountPercentage: number,
       rating: number,
       stock: number,
       brand: string,
       category: string,
       thumbnail: string,
       images: string[],
       status: boolean
    ) {

      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.discountPercentage = discountPercentage;
      this.rating = rating;
      this.stock = stock;
      this.brand = brand;
      this.category = category;
      this.thumbnail = thumbnail;
      this.images = images;
      this.status = status;
    }
  }