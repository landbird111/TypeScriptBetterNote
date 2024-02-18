import { IDecoratorPerson } from "../Interfaces/IDecoratorPerson";
import { DecoratorPerson } from "./DecoratorPerson";

/** 創造一個打扮的框架 */
export class DecoratorFinery extends DecoratorPerson implements IDecoratorPerson {
    protected decoratorPerson: IDecoratorPerson | null = null;

    public Decorate(decoratorPerson: IDecoratorPerson) {
        this.decoratorPerson = decoratorPerson;
    }

    Show() {
        if (this.decoratorPerson != null) {
            this.decoratorPerson.Show();
        }
    }
}
