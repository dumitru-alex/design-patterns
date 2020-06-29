import { GameCharactersFactory } from './game-characters-factory';

let warrior = GameCharactersFactory.getWarrior(6);
let mage = GameCharactersFactory.getMage(12);

console.log(`Warrior at level 6:`, warrior);
console.log(`Mage at level 12:`, mage);