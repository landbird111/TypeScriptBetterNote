import { INotificationSubject } from "../Interfaces/INotificationSubject";

/**
 * 抽象觀察者
 */
export abstract class Observer {
    protected observerName: string;
    protected notifySubject: INotificationSubject;

    constructor(observerName: string, notifySubject: INotificationSubject) {
        this.notifySubject = notifySubject;
        this.observerName = observerName;
    }

    abstract update(): void;
}
