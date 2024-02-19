import { PhoneBrand } from "../../BaseClasses/PhoneBrand";

/**
 * N牌手機的實體類別
 */
export class PhoneBrandN extends PhoneBrand {
    brandRun(): void {
        console.log('N牌手機');
        this.cellPhoneSoft?.Run();
    }
}