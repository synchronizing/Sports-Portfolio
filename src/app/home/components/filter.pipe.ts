import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'CardFilter'
})

export class CardFilter implements PipeTransform {
  transform(cards: any[], searchText: string): any[] {

    if(!cards)
      return [];

    else if(!searchText)
      return cards;

    else {

      const rgx = new RegExp(searchText, "i");

      // Returns true if any of objs values matches regex
      const valuesContain = (obj) =>
        Object.values(obj)
          // Only focusing on strings
          .filter(v => (typeof v === "string"))
          // findIndex returns -1 if not found
          .findIndex(s => rgx.test(String(s))) != -1;

      return cards.filter(( card ) =>
        valuesContain(card.player) || valuesContain(card.card));

    }
  }
}
