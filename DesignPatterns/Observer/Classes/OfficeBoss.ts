import { INotificationSubject } from "../Interfaces/INotificationSubject";
import { Observer } from "../BaseClasses/Observer";

/**
 * 公司老闆(具體通知者)
 */
export class OfficeBoss implements INotificationSubject {
    private observers: Observer[] = [];
    private actionWork: string = "";

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }

    notify(): void {
        for (let observer of this.observers) {
            observer.update();
        }
    }

    get subjectState(): string {
        return this.actionWork;
    }

    set subjectState(value: string) {
        this.actionWork = value;
    }
}
