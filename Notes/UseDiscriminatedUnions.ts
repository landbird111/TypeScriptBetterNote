/**
 * ========================================================
 * 這個範例展示了如何使用 Discriminated Unions
 * Discriminated Unions的中文是「可辨識聯合」，是一種特殊的型別，它可以幫助我們在使用型別判斷時，更加的安全。
 * ========================================================
 */

// 假設有個計算各種圖形面積的函式，一般工程師可能會這樣寫：
type JuniorShape = {
    kind: string;
    radius?: number;
    width?: number;
    height?: number;
    size?: number;
};

// 然後在計算方法裡，會使用 if else 來判斷傳入的圖形是什麼，然後再計算面積
// 但其實這樣十分不安全，因為如果傳入的圖形不是我們預期的，那麼就會出錯
// 也很難讓其他工程師知道這個函式的使用方式
// 若公式帶錯變數，也無法查覺，例如: 在計算圓形面積時，卻傳入了正方形的參數size
function useJuniorShapeGetArea(shape: JuniorShape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * (shape.radius || 0) ** 2;
        case "square":
            return (shape.size || 0) ** 2;
        case "rectangle":
            // let shapeSize = (shape.size || 0) ** 2;
            return (shape.width || 0) * (shape.height || 0);
        default:
            return 0;
    }
}

// ==============================

// 這時候就可以使用 Discriminated Unions 來幫助我們拆解這個函式

// 首先，我們先定義一個類型，裡面包含了所有可能的圖形
type SeniorShape =
    | { kind: "circle"; radius: number }
    | { kind: "square"; size: number }
    | { kind: "rectangle"; width: number; height: number };

// 然後，我們就可以使用這個類型來定義函式的參數
function useSeniorShapeGetArea(shape: SeniorShape): number {
    // 這時候，TypeScript 就會知道傳入的 shape 是哪一種圖形了
    // 若公式用到不存在的變數，TypeScript 也會提醒我們
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size ** 2;
        case "rectangle":
            // shape.size; // Error: Property 'size' does not exist on type '{ kind: "rectangle"; width: number; height: number; }'.
            return shape.width * shape.height;
        default:
            const _exhaustiveCheck: never = shape;
            return _exhaustiveCheck;
    }
}

// ==============================
