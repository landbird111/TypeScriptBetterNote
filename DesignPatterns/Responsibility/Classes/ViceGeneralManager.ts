import { HandleManager } from "../BaseClasses/HandleManager";
import { OrderRequest } from "./OrderRequest";

/** 副總經理 */
export class ViceGeneralManager extends HandleManager {
    constructor(handleManagerName: string) {
        super(handleManagerName);
    }

    handleOrderRequest(orderRequest: OrderRequest): string {
        if (orderRequest.orderRequestType === "請假" && orderRequest.orderRequestLevel <= 5) {
            return `${this.handleManagerName}批准(${orderRequest.orderRequestType}級別: ${orderRequest.orderRequestLevel}): ${orderRequest.orderRequestContent}`;
        } else {
            if (this.handleManager) {
                return this.handleManager.handleOrderRequest(orderRequest);
            }
        }

        return "已無人能處理此需求,請重新確認Vice";
    }
}
