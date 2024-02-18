import { IWorkProgram } from "../Interfaces/IWorkProgram";
import { WriteState } from "./WriteState";
import { SleepingState } from "./SleepingState";

/**
 * 晚上時段-工作狀態
 */
export class EveningState extends WriteState {
    WriteProgram(work: IWorkProgram): void {
        if (work.WorkIsFinished) {
            //若工作結束的話,下班休息狀態
            console.log(`目前時間是: ${work.WorkHour}點. 工作完成!`)
        } else {
            if (work.WorkHour < 21) {
                console.log(`目前時間是: ${work.WorkHour}點. 加班工作!`);
            } else {
                // 超過21點,則轉入睡眠狀態
                work.SetWorkState(new SleepingState());
                // 切換後，交給新的狀態處理
                work.WriteProgram();
            }
        }
    }
}