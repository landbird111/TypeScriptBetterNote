import { CalcOperation } from "./CalcOperation";

/**
 * 減法的計算
 */
export class CalcSubtraction extends CalcOperation {
    getResult(): number {
        return this.numberA - this.numberB;
    }
}
