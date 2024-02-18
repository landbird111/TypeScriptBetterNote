import { Observer } from "./Observer";
import { INotificationSubject } from "../Interfaces/INotificationSubject";

/**
 * 偷看NBA的公司同事(具體觀察者)
 */
export class OfficePeekNBA extends Observer {
    constructor(observerName: string, notifySubject: INotificationSubject) {
        super(observerName, notifySubject);
    }

    update(): void {
        console.log(
            `收到通知: ${this.notifySubject.subjectState}，${this.observerName} 關閉NBA直播畫面，繼續工作！`
        );
    }
}
