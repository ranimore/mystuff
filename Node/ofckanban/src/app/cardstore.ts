import {CardSchema} from './cardschema';

export class CardStore {
 cards: Object = {};
 lastid = -1;
 _addCard(card: CardSchema) {
   card.uid = String(++this.lastid);
   this.cards[card.uid] = card;
   return (card.uid);
 }

 getCard(cardId: string) {
   return this.cards[cardId];
 }

 newCard(description: string): string {
  const card = new CardSchema();
  card.description = description;
  return (this._addCard(card));
 }
 
}