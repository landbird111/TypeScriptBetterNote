import { ICalcFactory } from "../Interfaces/ICalcFactory";
import { CalcMultiple } from "./CalcMultiple";
import { CalcOperation } from "../Classes/CalcOperation";

/**
 * 乘法的計算工廠
 */
export class CalcMultipleFactory implements ICalcFactory {
    createOperation(): CalcOperation {
        return new CalcMultiple();
    }
}
