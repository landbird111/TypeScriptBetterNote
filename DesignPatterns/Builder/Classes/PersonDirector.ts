import { IPersonDirector } from "../Interfaces/IPersonDirector";
import { PersonBuilder } from "../BaseClasses/PersonBuilder";

/**
 * 建立人物的操作者
 */
export class PersonDirector implements IPersonDirector {
    private personBuilder: PersonBuilder;

    constructor(personBuilder: PersonBuilder) {
        this.personBuilder = personBuilder;
    }

    public CreatePerson(): void {
        this.personBuilder.BuildHead();
        this.personBuilder.BuildBody();
        this.personBuilder.BuildArmLeft();
        this.personBuilder.BuildArmRight();
        this.personBuilder.BuildLegLeft();
        this.personBuilder.BuildLegRight();
    }
}
