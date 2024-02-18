import { CalcOperation } from "./CalcOperation";

/**
 * 乘法的計算
 */
export class CalcMultiple extends CalcOperation {
    getResult(): number {
        return this.numberA * this.numberB;
    }
}
