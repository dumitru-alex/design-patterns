import { CardDeck } from "./card-deck";
import { Card } from "./card";

let cardDeck = new CardDeck();

cardDeck.add(new Card("card 1", 34, 56));
cardDeck.add(new Card("card 2", 12, 34));

let secondDeck = new CardDeck();

secondDeck.add(new Card("card 3", 34, 56));
secondDeck.add(new Card("card 4", 12, 34));

cardDeck.add(secondDeck);

cardDeck.add(new Card("card 5", 34, 23));

console.log(cardDeck.display());