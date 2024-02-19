import { IWorkProgram } from "../Interfaces/IWorkProgram";
import { WriteState } from "../BaseClasses/WriteState";
import { AfternoonState } from "./AfternoonState";

/**
 * 中午時段-工作狀態
 */
export class NoonState extends WriteState {
    WriteProgram(work: IWorkProgram): void {
        if (work.WorkHour < 13) {
            console.log(`目前時間是: ${work.WorkHour}點。 Lunch time!`);
        } else {
            // 超過13點,則轉入下午狀態
            work.SetWorkState(new AfternoonState());
            // 切換後，交給新的狀態處理
            work.WriteProgram();
        }
    }
}