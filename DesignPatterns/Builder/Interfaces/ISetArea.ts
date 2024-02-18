/**
 * 設定一個矩形的面積
 */
export interface ISetArea {
    /** 設定寬度 */
    SetWidth(partName: string, width: number): void;

    /** 設定高度 */
    SetHeight(partName: string, height: number): void;

    /** 設定寬度與高度 */
    SetArea(partName: string, width: number, height: number): void;

    /** 取得面積 */
    GetArea(): number;

    /** 取得部位名稱 */
    GetPartName(): string;
}
