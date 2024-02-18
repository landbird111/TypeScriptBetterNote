import { IGiveGift } from "../Interfaces/IGiveGift";
import { SchoolGirl } from "./SchoolGirl";
import { Pursuit } from "./Pursuit";

export class SendGiveProxy implements IGiveGift {
    private _pursuit: Pursuit;

    constructor(mm: SchoolGirl) {
        this._pursuit = new Pursuit(mm);
    }

    // 代理者可以決定是否要執行這些方法，或是在執行前後做一些額外的處理

    GiveDolls(): void {
        this._pursuit.GiveDolls();
    }
    GiveFlowers(): void {
        this._pursuit.GiveFlowers();
    }
    GiveChocolate(): void {
        // this._pursuit.GiveChocolate();
        console.log("我是代理者，我不會送巧克力");
    }
}
