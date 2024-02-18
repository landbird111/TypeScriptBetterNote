import { IGiveGift } from "../Interfaces/IGiveGift";
import { SchoolGirl } from "./SchoolGirl";

/**
 * 追求者的類別
 */
export class Pursuit implements IGiveGift {
    private _mm: SchoolGirl;

    constructor(mm: SchoolGirl) {
        this._mm = mm;
    }

    // IGiveGift Members
    GiveDolls(): void {
        console.log(`${this._mm.name}，送你洋娃娃`);
    }
    GiveFlowers(): void {
        console.log(`${this._mm.name}，送你鮮花`);
    }
    GiveChocolate(): void {
        console.log(`${this._mm.name}，送你巧克力`);
    }
}
