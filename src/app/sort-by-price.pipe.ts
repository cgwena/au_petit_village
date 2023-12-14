import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], triPrix: string): any[] {
   
    if (triPrix === 'croissant') {
      products.sort((a, b) => a.prix > b.prix ? 1 : -1);
    } else if (triPrix === 'decroissant') {
      products.sort((a, b) => a.prix < b.prix ? 1 : -1);
    }

    return products;
  }

}
