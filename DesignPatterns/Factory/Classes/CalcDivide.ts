import { CalcOperation } from "./CalcOperation";

/**
 * 除法的計算
 */
export class CalcDivide extends CalcOperation {
    getResult(): number {
        if (this.numberB === 0) {
            throw new Error("除數不能為 0");
        }
        return this.numberA / this.numberB;
    }
}
