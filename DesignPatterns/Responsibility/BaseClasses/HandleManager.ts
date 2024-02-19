import { OrderRequest } from "../Classes/OrderRequest";

/** 處理的主管 */
export abstract class HandleManager {
    protected handleManager: HandleManager | null;
    protected handleManagerName: string;

    constructor(handleManagerName: string) {
        this.handleManagerName = handleManagerName;
        this.handleManager = null;
    }

    /**
     * 設定下一個權責主管
     * @param nextHandleManager 下一個處理者
     */
    setSuperior(nextHandleManager: HandleManager): void {
        this.handleManager = nextHandleManager;
    }

    /**
     * 定義處理請求的一個抽象方法
     * @param orderRequest 需求申請
     */
    abstract handleOrderRequest(orderRequest: OrderRequest): string;
}