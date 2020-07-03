import { ICardComponent } from "./icard-component";

// For the card, the add/remove/get won't be used, so we will throw an exception
export class Card implements ICardComponent {
    add(component: ICardComponent): void {
        throw new Error("Operation not supported.");
    }
    remove(component: ICardComponent): void {
        throw new Error("Operation not supported.");
    }
    get(index: number): ICardComponent {
        throw new Error("Operation not supported.");
    }
    display(): string {
        return `${this.name}: ${this.attack} / ${this.defence}`;
    }
    
    constructor(public name: string, public attack: number, public defence: number){}
}