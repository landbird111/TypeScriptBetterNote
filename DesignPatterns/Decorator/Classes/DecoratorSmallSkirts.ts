import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorFinery } from "./DecoratorFinery";

export class DecoratorSmallSkirts extends DecoratorFinery implements IDecoratorPerson {
    constructor() {
        super("");
    }

    Show(): void {
        console.log("小裙子");
        super.Show();
    }
}
