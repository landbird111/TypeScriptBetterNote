import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorFinery } from "./DecoratorFinery";

export class DecoratorBigTrouser extends DecoratorFinery implements IDecoratorPerson {
    constructor() {
        super("");
    }

    Show(): void {
        console.log("大垮褲");
        super.Show();
    }
}
