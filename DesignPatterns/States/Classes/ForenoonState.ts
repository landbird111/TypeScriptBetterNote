import { WorkProgram } from "./WorkProgram";
import { WriteState } from "../BaseClasses/WriteState";
import { NoonState } from "./NoonState";

/**
 * 上午時段-工作狀態
 */
export class ForenoonState extends WriteState {
    WriteProgram(work: WorkProgram): void {
        if (work.WorkHour < 12) {
            console.log(`目前時間是: ${work.WorkHour}點。 努力工作!`);
        } else {
            // 超過12點,則轉入午休狀態
            work.SetWorkState(new NoonState());
            // 切換後，交給新的狀態處理
            work.WriteProgram();
        }
    }
}