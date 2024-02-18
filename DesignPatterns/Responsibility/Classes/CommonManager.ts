import { HandleManager } from "./HandleManager";
import { OrderRequest } from "./OrderRequest";

/** 一般經理 */
export class CommonManager extends HandleManager {
    constructor(handleManagerName: string) {
        super(handleManagerName);
    }

    // 描述這個經理要怎麼處理請求
    handleOrderRequest(orderRequest: OrderRequest): string {
        // 如果是請假的事情,又是級別小於2的假別,那麼就由一般經理處理就好
        if (orderRequest.orderRequestType === "請假" && orderRequest.orderRequestLevel <= 2) {
            return `${this.handleManagerName}批准(${orderRequest.orderRequestType}級別: ${orderRequest.orderRequestLevel}): ${orderRequest.orderRequestContent}`;
        } else {
            // 否則,就將這個請求交給被指派的另一個人來處理
            if (this.handleManager) {
                return this.handleManager.handleOrderRequest(orderRequest);
            }
        }

        return "已無人能處理此需求,請重新確認Common";
    }
}
