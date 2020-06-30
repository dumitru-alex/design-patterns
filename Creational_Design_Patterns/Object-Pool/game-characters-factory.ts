import { GameCharacter } from "./game-character";

// responsible for building specific classes (warrior, mage, etc)
// without the calling class to know how those chars are built

export class GameCharactersFactory {
    public static getWarrior(level: number): GameCharacter {
        let warrior: GameCharacter;
        if (level < 10) {
            warrior = {
                strengh: 18,
                dexterity: 12,
                health: 20,
                magic: 0
            }
        }
        else {
            warrior = {
                strengh: 30,
                dexterity: 21,
                health: 32,
                magic: 0
            }
            
        }
        return warrior;
    }

    public static getMage(level: number): GameCharacter {
        let mage: GameCharacter;
        if (level < 10) {
            mage = {
                strengh: 0,
                dexterity: 12,
                health: 20,
                magic: 15
            }
        }
        else {
            mage = {
                strengh: 0,
                dexterity: 21,
                health: 32,
                magic: 41
            }
            
        }
        return mage;
    }
}