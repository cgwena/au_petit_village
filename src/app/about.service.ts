import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  infos = [
    {
      title: "Qui sommes-nous ?",
      text: "Au petit village est une entreprise fondée il y a 15 ans par 2 fans de BD et de figurines.",
      img: "assets/pictures/banquet.jpeg",
      alt: "Le banquet du village d'Astérix"
    }
  ]
  constructor() { }
}
