import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {
  products : any[] = []
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.products = this.productsService.products
      this.triPrix = 'croissant'
  }

  triPrix: string = 'Trier par'
  rechercheNom: string = ''

}
