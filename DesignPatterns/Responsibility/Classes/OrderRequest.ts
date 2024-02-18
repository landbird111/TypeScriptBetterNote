/**
 * 需求申請
 */
export class OrderRequest {
    /** 申請類別 */
    orderRequestType!: string;

    /** 申請內容 */
    orderRequestContent!: string;

    /** 申請等級 */
    orderRequestLevel!: number;
}
