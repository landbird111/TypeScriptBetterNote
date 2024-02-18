import { PhoneBrand } from "./PhoneBrand";

/**
 * M牌手機的實體類別
 */
export class PhoneBrandM extends PhoneBrand {
    brandRun(): void {
        console.log('M牌手機');
        this.cellPhoneSoft?.Run();
    }
}