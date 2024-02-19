import { WriteState } from "../BaseClasses/WriteState";

/**
 * 建立一個工作作業的介面
 */
export interface IWorkProgram {
    /** 顯示目前的工作小時 */
    WorkHour: number;

    /** 工作是否結束 */
    WorkIsFinished: boolean;

    /** 設定目前的工作狀態 */
    SetWorkState(workState: WriteState): void;

    /** 執行工作作業: 寫程式 */
    WriteProgram(): void;
}
