import { CellphoneSoft } from "../../BaseClasses/CellphoneSoft";

/**
 * 手機相機，依循軟體這個概念的結構去實作
 */
export class CellPhonePhoto extends CellphoneSoft {
    Run(): void {
        console.log('執行手機相機');
    }
}