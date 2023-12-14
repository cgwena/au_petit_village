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
      description : 'Une figurine du célèbre gaulois !',
      matiere: 'plastique',
      dimensions: 'hauteur : 9cm',
      prix: '19€90'
    },
    {
      id:2,
      name: 'Figurine Obélix',
      img: '../assets/pictures/figurine-obelix.jpeg',
      description : 'Obélix et son fidèle compagnon Idéfix',
      matiere: 'plastique',
      dimensions: 'hauteur : 11cm',
      prix: '24€90'
    },
    {
      id:3,
      name: 'Figurine Idéfix',
      img: '../assets/pictures/figurine-idefix.jpeg',
      description : "Le fidèle compagnon d'Astérix et Obélix",
      matiere: 'résine',
      dimensions: 'hauteur : 8cm',
      prix: '14€90'
    }
  ]
  constructor() { }
  getProductById(id:number) {
    return this.products.find(product => product.id === id)
  }
}
