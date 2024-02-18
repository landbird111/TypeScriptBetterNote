import { IWorkProgram } from "../Interfaces/IWorkProgram";
import { WriteState } from "./WriteState";

/**
 * 睡眠時段-工作狀態
 */
export class SleepingState extends WriteState {
    WriteProgram(work: IWorkProgram): void {
        // 睡眠時段，不用工作
        console.log(`目前時間是: ${work.WorkHour}點. 睡眠中...`);
    }
}