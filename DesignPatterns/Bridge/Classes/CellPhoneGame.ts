import { CellphoneSoft } from "./CellphoneSoft";

/**
 * 手機遊戲，依循軟體這個概念的結構去實作
 */
export class CellPhoneGame extends CellphoneSoft {
    Run(): void {
        console.log('執行手機遊戲');
    }
}