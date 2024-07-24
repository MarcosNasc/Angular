import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCard } from './ProductCard';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product ?: ProductCard;
  @Output() status : EventEmitter<any> = new EventEmitter();

  ngOnInit(){
    // console.log(this.product)
  }

  emitterEvent(){
    this.status.emit(this.product);
  }
 
}


