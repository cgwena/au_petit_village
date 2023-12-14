import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
    transform(products: any[], tri: string, reverse: boolean = false): any[] {
     
      if (tri === 'croissant') products.sort((a, b) => a.prix > b.prix ? 1 : -1);
      else products.sort((a, b) => a > b ? 1 : -1);
  
      if (reverse) products.reverse();
  
      return products;
  }

}
