/**
 * ============================
 * 這裡示範四種 TypeScript 函數的寫法
 * ============================
 */

// 這四個寫法都是描述相同的函數，只是寫法不同罷了

// 宣告變數時註記，並將函式當成物件值
let additionType1: (a: number, b: number) => number = function (a, b) {
    return a + b;
};

// 宣告變數時，並將函式當成物件值
let additionType2 = function (a: number, b: number): number {
    return a + b;
};

// 函式宣告敘述式，因此一定是在輸入輸出部份註記
function additionType3(a: number, b: number): number {
    return a + b;
}

// 宣告變數時，將函式當成物件值
let additionType4 = function (a, b) {
    return a + b;
} as (a: number, b: number) => number;
