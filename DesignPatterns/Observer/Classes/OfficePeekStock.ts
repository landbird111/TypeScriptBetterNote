import { Observer } from "../BaseClasses/Observer";
import { INotificationSubject } from "../Interfaces/INotificationSubject";

/**
 * 偷看股票的公司同事(具體觀察者)
 */
export class OfficePeekStock extends Observer {
    constructor(observerName: string, notifySubject: INotificationSubject) {
        super(observerName, notifySubject);
    }

    update(): void {
        console.log(
            `收到通知: ${this.notifySubject.subjectState}，${this.observerName} 關閉股票行情，繼續工作！`
        );
    }
}
