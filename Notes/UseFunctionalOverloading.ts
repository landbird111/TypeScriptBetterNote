/**
 * ======================================
 * Functional Overloading(方法重载)
 * ======================================
 */

// 方法重載是指一個函數可以接受不同數量或類型的參數，並根據不同的參數類型或數量執行不同的邏輯。
// 但要注意的是，方法重載只是一種靜態類型語言的特性，TypeScript 也支持方法重載。
// 寫法與其他語言有所不同，TypeScript 使用一個函數名稱，然後定義多個函數類型的方式來實現方法重載。
function createDate(timestamp: number): Date;
function createDate(year: number, month: number, day: number): Date;
function createDate(x: number, y?: number, z?: number): Date {
    return y !== undefined && z !== undefined ? new Date(x, y, z) : new Date(x);
}

const date1 = createDate(1593567600000);
const date2 = createDate(2020, 6, 30);
