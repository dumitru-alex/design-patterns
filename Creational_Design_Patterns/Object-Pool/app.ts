import { GameCharactersFactory } from './game-characters-factory';
import { GameCharatersPool } from './game-characters-pool';

let level = 12;
let pool = new GameCharatersPool(level);

// load 40 warriors
for (let i=0; i<40; i++) {
    console.log(i+1);
    console.log(pool.getWarrior());
}