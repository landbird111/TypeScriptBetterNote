import { ICalcFactory } from "../Interfaces/ICalcFactory";
import { CalcSubtraction } from "./CalcSubtraction";
import { CalcOperation } from "../Classes/CalcOperation";

/**
 * 減法的計算工廠
 */
export class CalcSubtractionFactory implements ICalcFactory {
    createOperation(): CalcOperation {
        return new CalcSubtraction();
    }
}
