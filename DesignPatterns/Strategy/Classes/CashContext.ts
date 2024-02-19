import { CashChargeBase } from "../BaseClasses/CashChargeBase";

export class CashContext {
    private cashCharge: CashChargeBase;

    //透過建構式，傳入具體的收費策略
    constructor(cashCharge: CashChargeBase) {
        this.cashCharge = cashCharge;
    }

    /**
     * 取得計算後的結果
     * @param money 計算的原始價錢
     * @returns
     */
    public getResult(money: number): number {
        return this.cashCharge.charge(money);
    }
}
