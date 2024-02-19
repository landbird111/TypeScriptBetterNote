import { PhoneBrand } from "../../BaseClasses/PhoneBrand";

/**
 * Z牌手機的實體類別
 */
export class PhoneBrandZ extends PhoneBrand {
    brandRun(): void {
        console.log('Z牌手機');
        this.cellPhoneSoft?.Run();
    }
}