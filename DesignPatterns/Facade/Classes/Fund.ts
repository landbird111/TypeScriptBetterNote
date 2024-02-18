import { IFund } from "../Interfaces/IFund";
import { Stock1 } from "./Stock1";
import { Stock2 } from "./Stock2";
import { Realty1 } from "./Realty1";
import { NationalDebt1 } from "./NationalDebt1";

/**
 * 基金主體
 */
export class Fund implements IFund {
    private stock1: Stock1;
    private stock2: Stock2;
    private realty1: Realty1;
    private nationalDept1: NationalDebt1;

    constructor() {
        this.stock1 = new Stock1();
        this.stock2 = new Stock2();
        this.realty1 = new Realty1();
        this.nationalDept1 = new NationalDebt1();
    }

    /** 買基金 */
    BuyFund(): void {
        console.log('開始買基金');
        this.stock1.buy();
        this.stock2.buy();
        this.realty1.buy();
        this.nationalDept1.buy();
    }

    /** 賣基金 */
    SellFund(): void {
        console.log('開始賣基金');
        this.stock1.sell();
        this.stock2.sell();
        this.realty1.sell();
        this.nationalDept1.sell();
    }
}
