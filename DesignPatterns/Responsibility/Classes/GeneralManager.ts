import { HandleManager } from "./HandleManager";
import { OrderRequest } from "./OrderRequest";

/** 總經理, 最大管理者, 末端管理者 */
export class GeneralManager extends HandleManager {
    constructor(handleManagerName: string) {
        super(handleManagerName);
    }

    handleOrderRequest(orderRequest: OrderRequest): string {
        if (orderRequest.orderRequestType === "請假") {
            return `${this.handleManagerName}批准(${orderRequest.orderRequestType}級別: ${orderRequest.orderRequestLevel}): ${orderRequest.orderRequestContent}`;
        }

        if (orderRequest.orderRequestType === "加薪") {
            if (orderRequest.orderRequestLevel <= 2) {
                return `${this.handleManagerName}批准(${orderRequest.orderRequestType}級別: ${orderRequest.orderRequestLevel}): ${orderRequest.orderRequestContent}`;
            }

            return `${this.handleManagerName} 要求${orderRequest.orderRequestType}事項: ${orderRequest.orderRequestContent}，暫且退回!!!`;
        }

        return "此事項無需處理,一律退回!!!";
    }
}
