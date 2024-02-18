import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorFinery } from "./DecoratorFinery";

export class DecoratorSmallTrouser extends DecoratorFinery implements IDecoratorPerson {
    constructor() {
        super("");
    }

    Show(): void {
        console.log("小垮褲");
        super.Show();
    }
}
