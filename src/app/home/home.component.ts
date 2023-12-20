import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})


export class HomeComponent implements OnInit {
  products : any[] = []
  infos : any[] = []
  constructor(private productsService: ProductsService, private aboutService : AboutService, private router : Router) {}

  ngOnInit(): void {
      this.products = this.productsService.products
      this.infos = this.aboutService.infos
      this.sortPrice = 'ascending'
  }

  showMoreDetails(productId: number):void {
    this.router.navigate(['/product', productId])
  }
  sortPrice: string = 'descending'
  nameSearch: string = ''
}


