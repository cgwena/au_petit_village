import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() products : any[] = []
  constructor(private productsService: ProductsService, private router : Router) {}

  ngOnInit(): void {
      this.products = this.productsService.products
      this.triPrix = 'croissant'
  }

  showMoreDetails(productId: number):void {
    this.router.navigate(['/product', productId])
  }

  triPrix: string = 'croissant'
  rechercheNom: string = ''

}
