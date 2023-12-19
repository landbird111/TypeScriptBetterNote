/**
 * ==============================
 * 這個範例是用來說明如何使用閉包函式
 * ==============================
 */

// 設計一個閉包函式，提供兩個方法，一個是增加1，一個是減少1

// 以下是使用閉包函式的範例

function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        },
    };
}

const counter = createCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
counter.decrement();
console.log(counter.getValue()); // 0