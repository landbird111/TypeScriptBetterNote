import { CalcOperation } from "../Classes/CalcOperation";

/** 提供一個工廠介面，將選擇包起來 */
export interface ICalcFactory {
    createOperation(): CalcOperation;
}
