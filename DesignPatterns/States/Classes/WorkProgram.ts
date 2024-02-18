import { WriteState } from "./WriteState";
import { IWorkProgram } from "../Interfaces/IWorkProgram";
import { ForenoonState } from "./ForenoonState";

/**
 * 實作工作作業
 */
export class WorkProgram implements IWorkProgram {
    /** 目前的工作狀態 */
    private current: WriteState;

    constructor() {
        // 預設為上午工作狀態
        this.current = new ForenoonState();
    }

    SetWorkState(workState: WriteState): void {
        this.current = workState;
    }

    /**
     * 執行工作作業: 寫程式
     */
    WriteProgram(): void {
        // 依據目前的工作狀態,執行對應的工作作業
        this.current.WriteProgram(this);
    }

    public WorkHour!: number;

    public WorkIsFinished!: boolean;
}
