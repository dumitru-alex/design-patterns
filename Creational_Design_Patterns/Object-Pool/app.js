"use strict";
exports.__esModule = true;
var game_characters_pool_1 = require("./game-characters-pool");
var level = 12;
var pool = new game_characters_pool_1.GameCharatersPool(level);
// load 40 warriors
for (var i = 0; i < 40; i++) {
    console.log(i + 1);
    console.log(pool.getWarrior());
}
