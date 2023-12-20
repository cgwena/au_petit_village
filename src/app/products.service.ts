import { Injectable } from '@angular/core';
import products from '../assets/datas/products.json'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = products
  
  constructor() { }
  getProductById(id:number) {
    return this.products.find(product => product.id === id)
  }
}
