/**
 * 描繪顏色介面
 */
export interface IPaintColor {
    /** 描繪顏色 */
    PaintColor(partName: string, colorName: string): void;

    /** 取得顏色名稱 */
    GetColorName(): string;

    /** 取得部位名稱 */
    GetPartName(): string;
}
