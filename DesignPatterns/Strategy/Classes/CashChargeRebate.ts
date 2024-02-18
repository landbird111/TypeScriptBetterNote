import { CashChargeBase } from "./CashChargeBase";

/**
 * 現金收費打折
 */
export class CashChargeRebate extends CashChargeBase {
    //預設打八折
    private rebate: number = 0.8;

    constructor(rebate: number) {
        super();
        this.rebate = rebate;
    }

    /**
     * 計算打折後的結果
     * @param money 原本價錢
     * @returns 
     */
    public charge(money: number): number {
        return money * this.rebate;
    }
}