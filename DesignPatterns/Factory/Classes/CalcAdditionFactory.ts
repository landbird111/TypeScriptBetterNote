import { CalcAddition } from "./CalcAddition";
import { ICalcFactory } from "../Interfaces/ICalcFactory";
import { CalcOperation } from "../Classes/CalcOperation";

/**
 * 加法的計算工廠
 */
export class CalcAdditionFactory implements ICalcFactory {
    createOperation(): CalcOperation {
        return new CalcAddition();
    }
}
