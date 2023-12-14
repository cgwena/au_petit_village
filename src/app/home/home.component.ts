import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products : any[] = []
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
      this.products = this.productsService.products
      console.log(this.products)
  }

  onSortingChange(): void {
    // Code that might update the products array based on sorting change
    console.log('Sorted products:', this.products); // Add this line
  }
  triPrix: string = 'croissant'
  
}


