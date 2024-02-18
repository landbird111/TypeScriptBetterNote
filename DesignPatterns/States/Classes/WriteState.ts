import { IWorkProgram } from "../Interfaces/IWorkProgram";

/**
 * 建立一個改寫目前狀態的抽象類別
 */
export abstract class WriteState {
    abstract WriteProgram(work: IWorkProgram): void;
}
