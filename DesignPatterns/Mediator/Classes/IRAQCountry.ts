import { ICountry } from "../Interfaces/ICountry";
import { UnitedNations } from "../BaseClasses/UnitedNations";
import { Country } from "../BaseClasses/Country";

/**
 * 建立一個伊拉克國家
 */
export class IRAQCountry extends Country implements ICountry {
    constructor(myMediator: UnitedNations) {
        super(myMediator);
    }

    public Send(message: string): string {
        // 注意: 這邊是用父系的mediator, 不是自己的mediator
        return this.mediator.Send(message, this);
    }

    public Notify(message: string): string {
        return `伊拉克獲得對方訊息: ${message}`;
    }
}
