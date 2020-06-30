"use strict";
exports.__esModule = true;
// responsible for building specific classes (warrior, mage, etc)
// without the calling class to know how those chars are built
var GameCharactersFactory = /** @class */ (function () {
    function GameCharactersFactory() {
    }
    GameCharactersFactory.getWarrior = function (level) {
        var warrior;
        if (level < 10) {
            warrior = {
                strengh: 18,
                dexterity: 12,
                health: 20,
                magic: 0
            };
        }
        else {
            warrior = {
                strengh: 30,
                dexterity: 21,
                health: 32,
                magic: 0
            };
        }
        return warrior;
    };
    GameCharactersFactory.getMage = function (level) {
        var mage;
        if (level < 10) {
            mage = {
                strengh: 0,
                dexterity: 12,
                health: 20,
                magic: 15
            };
        }
        else {
            mage = {
                strengh: 0,
                dexterity: 21,
                health: 32,
                magic: 41
            };
        }
        return mage;
    };
    return GameCharactersFactory;
}());
exports.GameCharactersFactory = GameCharactersFactory;
