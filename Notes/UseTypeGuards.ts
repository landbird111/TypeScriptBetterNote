/**
 * ==========================
 * Type Guards
 * ==========================
 */

// 可以使用類型檢查來確保變數的類型
function isString(value: unknown): value is string {
    return typeof value === "string";
}

function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}

// 如果是想檢查是否為指定的物件，可以參考 UseUnknownBetterThanAny.ts 的範例