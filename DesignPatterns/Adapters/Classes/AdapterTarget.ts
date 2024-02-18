/**
 * 輸出目標，可以是具體或抽象的類別，也可以是介面
 */
export class AdapterTarget {
    public request(): void {
        console.log("一般的普通請求");
    }
}
