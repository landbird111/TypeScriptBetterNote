import { Command } from "../Classes/Command";

export interface IWaiter {
    /** 收訂單 */
    SetOrder(sOrder: Command): string;

    /** 取消訂單 */
    CancelOrder(sOrder: Command): string;

    /** 通知酒保執行訂單作業 */
    NotifyToExecuteOrder(): string;
}
