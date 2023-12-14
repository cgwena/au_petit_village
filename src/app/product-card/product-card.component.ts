import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() products : any[] = []
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.products = this.productsService.products
      this.triPrix = 'croissant'
  }

  triPrix: string = 'Trier par'

}
