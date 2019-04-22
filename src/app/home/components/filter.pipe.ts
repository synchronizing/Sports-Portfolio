import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(cards: any[], searchText: string): any[] {
    if(!cards) return [];
    if(!searchText) return cards;
    searchText = searchText.toLowerCase();
    return cards.filter( it => {
      return it.toLowerCase().includes(searchText);
    });
   }
}