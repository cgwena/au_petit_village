import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Figurine Astérix',
      img: '../assets/pictures/figurine-asterix.jpeg',
      description : 'Figurine en plastique de 11cm, peinte à la main',
      prix: '19€90'
    },
    {
      id:2,
      name: 'Figurine Obélix',
      img: '../assets/pictures/figurine-obelix.jpeg',
      description : 'Figurine en plastique de 9cm, peinte à la main',
      prix: '24€90'
    },
    {
      id:3,
      name: 'Figurine Idéfix',
      img: '../assets/pictures/figurine-idefix.jpeg',
      description : 'Figurine en résine de 8cm, peinte à la main',
      prix: '14€90'
    }
  ]
  constructor() { }
  getProductById(id:number) {
    return this.products.find(product => product.id === id)
  }
}
