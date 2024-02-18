import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorFinery } from "./DecoratorFinery";

export class DecoratorTShirts extends DecoratorFinery implements IDecoratorPerson {
    constructor() {
        super("");
    }

    Show(): void {
        console.log("大T恤");
        super.Show();
    }
}
