import { CashChargeBase } from "../BaseClasses/CashChargeBase";

/**
 * 現金收費返利
 */
export class CashChargeReturn extends CashChargeBase {
    /** 滿足條件 */
    private moneyCondition: number = 0.0;
    /** 返回多少錢 */
    private moneyReturn: number = 0.0;

    constructor(moneyCondition: number, moneyReturn: number) {
        super();
        //需滿足多少錢,例:滿300元
        this.moneyCondition = moneyCondition;
        //才送多少錢,例:送100元
        this.moneyReturn = moneyReturn;
    }

    public charge(money: number): number {
        let result = money;

        //當要計算的錢,大於要滿足的錢時
        if (money >= this.moneyCondition) {
            //則計算倍數的錢
            result = money - Math.floor(money / this.moneyCondition) * this.moneyReturn;

            //範例=>
            //例:    200 - (200\300) * 100 = 200
            //例:    500 - (500\300) * 100 = 400
            //例:    900 - (900\300) * 100 = 600
        }
        
        return result;
    }
}
