import { ICalcFactory } from "../Interfaces/ICalcFactory";
import { CalcDivide } from "./CalcDivide";
import { CalcOperation } from "../Classes/CalcOperation";

/**
 * 除法的計算工廠
 */
export class CalcDivideFactory implements ICalcFactory {
    createOperation(): CalcOperation {
        return new CalcDivide();
    }
}
