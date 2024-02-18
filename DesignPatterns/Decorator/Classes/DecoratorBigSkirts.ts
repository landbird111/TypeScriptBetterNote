import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorFinery } from "./DecoratorFinery";

export class DecoratorBigSkirts extends DecoratorFinery implements IDecoratorPerson {
    constructor() {
        super("");
    }

    Show(): void {
        console.log("大裙子");
        super.Show();
    }
}
