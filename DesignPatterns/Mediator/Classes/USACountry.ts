import { ICountry } from "../Interfaces/ICountry";
import { Country } from "./Country";
import { UnitedNations } from "./UnitedNations";

/**
 * 建立一個美國國家
 */
export class USACountry extends Country implements ICountry {
    constructor(myMediator: UnitedNations) {
        super(myMediator);
    }

    public Send(message: string): string {
        // 注意: 這邊是用父系的mediator, 不是自己的mediator
        return this.mediator.Send(message, this);
    }

    public Notify(message: string): string {
        return `美國獲得對方訊息: ${message}`;
    }
}
