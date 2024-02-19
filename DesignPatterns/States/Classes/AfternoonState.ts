import { IWorkProgram } from "../Interfaces/IWorkProgram";
import { WriteState } from "../BaseClasses/WriteState";
import { EveningState } from "./EveningState";

/**
 * 下午時段-工作狀態
 */
export class AfternoonState extends WriteState {
    WriteProgram(work: IWorkProgram): void {
        if (work.WorkHour < 17) {
            console.log(`目前時間是: ${work.WorkHour}點. 下午工作開始!`);
        } else {
            // 超過17點,則轉入晚上狀態
            work.SetWorkState(new EveningState());
            // 切換後，交給新的狀態處理
            work.WriteProgram();
        }
    }
}