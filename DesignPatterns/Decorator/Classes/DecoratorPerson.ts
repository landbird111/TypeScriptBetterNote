import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";

export class DecoratorPerson implements IDecoratorPerson {
    constructor(public name: string) {}
    Show(): void {
        console.log(`裝扮的${this.name}`);
    }
}
