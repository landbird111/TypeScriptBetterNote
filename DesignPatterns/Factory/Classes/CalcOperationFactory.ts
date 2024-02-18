import { CalcOperation } from "./CalcOperation";
import { CalcAddition } from "./CalcAddition";
import { CalcSubtraction } from "./CalcSubtraction";
import { CalcMultiple } from "./CalcMultiple";
import { CalcDivide } from "./CalcDivide";
import { CalcOperationType } from "../Enums/calcOperationType";

/**
 * 計算操作工廠
 */
export class CalcOperationFactory {
    /**
     * 創建計算操作
     * @param operate 計算操作
     */
    static createCalcOperation(operate: CalcOperationType): CalcOperation {
        let calcOperation: CalcOperation;
        switch (operate) {
            case CalcOperationType.Addition:
                calcOperation = new CalcAddition();
                break;
            case CalcOperationType.Subtraction:
                calcOperation = new CalcSubtraction();
                break;
            case CalcOperationType.Multiple:
                calcOperation = new CalcMultiple();
                break;
            case CalcOperationType.Divide:
                calcOperation = new CalcDivide();
                break;
            default:
                throw new Error("不支援此操作");
        }
        return calcOperation;
    }
}
