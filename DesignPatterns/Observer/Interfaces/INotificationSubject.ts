import { Observer } from "../BaseClasses/Observer";

/**
 * 通知者介面
 */
export interface INotificationSubject {

    /** 註冊觀察者 */ 
    attach(observer: Observer): void;

    /** 移除觀察者 */
    detach(observer: Observer): void;

    /** 通知觀察者 */ 
    notify(): void;

    /** 取得狀態 */
    subjectState: string;
}