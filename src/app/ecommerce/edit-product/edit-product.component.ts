import { Component, DEFAULT_CURRENCY_CODE, LOCALE_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../products/product.service';
import { ProductCard } from '../product-card/ProductCard';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
  ]
})
export class EditProductComponent {
  
  product ?: ProductCard;

  constructor(
    private route: ActivatedRoute, 
    private productService : ProductService,
    private router : Router
  )
  {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id']; 
      this.productService.getProductById(id)
        .then(product => {
          this.product = product;
          // console.log(product)
        });
    });
  }

  salvar() : void {
    this.router.navigate(["/products"]);
  }
}
