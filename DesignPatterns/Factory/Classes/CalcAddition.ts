import { CalcOperation } from "./CalcOperation";

/**
 * 加法的計算
 */
export class CalcAddition extends CalcOperation {
    getResult(): number {
        return this.numberA + this.numberB;
    }
}