"use strict";
exports.__esModule = true;
var game_characters_factory_1 = require("./game-characters-factory");
var GameCharatersPool = /** @class */ (function () {
    function GameCharatersPool(_level) {
        this._level = _level;
        this._warriorsPool = [];
        this._magesPool = [];
        this.loadWarriorsPool();
        this.loadMagesPool();
    }
    GameCharatersPool.prototype.loadWarriorsPool = function () {
        for (var i = 0; i < GameCharatersPool.WARRIORS_POOL_SIZE; i++) {
            this._warriorsPool.push(game_characters_factory_1.GameCharactersFactory.getWarrior(this._level));
        }
    };
    GameCharatersPool.prototype.loadMagesPool = function () {
        for (var i = 0; i < GameCharatersPool.MAGES_POOL_SIZE; i++) {
            this._magesPool.push(game_characters_factory_1.GameCharactersFactory.getMage(this._level));
        }
    };
    GameCharatersPool.prototype.getPoolItem = function (pool, reloadFn) {
        var item = pool.pop();
        if (!pool.length) {
            reloadFn();
        }
        return item;
    };
    GameCharatersPool.prototype.getWarrior = function () {
        return this.getPoolItem(this._warriorsPool, this.loadWarriorsPool.bind(this));
    };
    GameCharatersPool.prototype.getMages = function () {
        return this.getPoolItem(this._magesPool, this.loadMagesPool.bind(this));
    };
    GameCharatersPool.WARRIORS_POOL_SIZE = 30;
    GameCharatersPool.MAGES_POOL_SIZE = 20;
    return GameCharatersPool;
}());
exports.GameCharatersPool = GameCharatersPool;
