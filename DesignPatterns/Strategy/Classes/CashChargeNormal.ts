import { CashChargeBase } from "./CashChargeBase";

export class CashChargeNormal extends CashChargeBase {
    public charge(money: number): number {
        return money;
    }
}
