import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

    transform(products: any[], rechercheNom: string): any[] {

      if (!rechercheNom) {
        return products;
      }
      
      rechercheNom = rechercheNom.toLowerCase();
  
      return products.filter(product => product.name.toLowerCase().includes(rechercheNom));
    }

}
