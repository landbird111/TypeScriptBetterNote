import { UnitedNations } from "../BaseClasses/UnitedNations";
import { USACountry } from "./USACountry";
import { IRAQCountry } from "./IRAQCountry";
import { Country } from "../BaseClasses/Country";

/**
 * 實作仲介者 - 聯合國安全理事會
 */
export class UnitedNationsSecurityCouncil extends UnitedNations {
    private _usaCountry!: USACountry;
    private _iraqCountry!: IRAQCountry;

    public set usaCountry(value: USACountry) {
        this._usaCountry = value;
    }

    public set iraqCountry(value: IRAQCountry) {
        this._iraqCountry = value;
    }

    Send(message: string, country: Country): string {
        if (country == this._usaCountry) {
            return this._usaCountry.Notify(message);
        } else if (country == this._iraqCountry) {
            return this._iraqCountry.Notify(message);
        } else {
            return "沒有這個國家";
        }
    }
}
