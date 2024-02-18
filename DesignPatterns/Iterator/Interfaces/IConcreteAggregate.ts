/**
 * 提供聚合物件的存取介面
 */
export interface IConcreteAggregate<T> {
    /** 目前總數 */
    Count(): number;

    /** 取得指定索引的項目 */
    GetItem(index: number): T | null;
    
    /** 設定指定索引的項目 */
    SetItem(index: number, value: T): void;
}
