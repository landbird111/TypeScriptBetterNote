import { IWaiter } from "../Interfaces/IWaiter";
import { Command } from "./Command";

export class Waiter implements IWaiter {
    private _sOrder: Command[] = [];

    /** 收訂單 */
    public SetOrder(sOrder: Command): string {
        // 在這邊可以做一些檢查，例如：是否已經收過訂單，或是庫存已經沒有了
        if (sOrder.GetCommandName === `Command.MixWhiskeyCommand`) {
            return `威士忌已經賣完了`;
        }

        this._sOrder.push(sOrder);
        return `收到訂單：${sOrder.GetCommandName}`;
    }

    /** 取消訂單 */
    public CancelOrder(sOrder: Command): string {
        this._sOrder = this._sOrder.filter((s) => s !== sOrder);
        return `取消訂單：${sOrder.GetCommandName}`;
    }

    /** 通知酒保執行訂單作業 */
    public NotifyToExecuteOrder(): string {
        console.log(`通知酒保開始執行訂單作業`);

        let sResult = ``;

        for (const s of this._sOrder) {
            sResult += `${s.ExecuteCommand()}\n`;
        }

        return sResult;
    }
}
