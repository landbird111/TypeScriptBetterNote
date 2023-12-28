/**
 * ========================================
 * 這個檔案是用來記錄一些在寫JS時，常常會用到的小技巧
 * ========================================
 */

// ===============================================

// Destructuring Assignment 解構賦值

// 1. 陣列解構賦值
const [firstItem, secondItem, ...rest] = [1, 2, 3, 4, 5];

// 2. 物件解構賦值
const { nameA, age, ...details } = { nameA: "John", age: 30, occupation: "Developer" };

// 3. 函式參數解構賦值
const printName = ({ nameB: nameInline }: { nameB: string }) => {
    console.log(nameInline);
};

// 4. 函式回傳物件解構賦值
const getFullName = ({ firstName, lastName }: { firstName: string; lastName: string }) => {
    return { fullName: `${firstName} ${lastName}` };
};

// ===============================================

// Spread Operator 展開運算子

// 1. 陣列展開運算子
const originalNumbers = [1, 2, 3, 4, 5];
const newNumbers = [...originalNumbers, 6, 7, 8, 9, 10];

// 2. 物件展開運算子
const person = { name: "John", age: 30 };
const newPerson = { ...person, occupation: "Developer" };

// 3. Copy 陣列
const originalNumbers2 = [1, 2, 3, 4, 5];
const copyNumbers = [...originalNumbers2];

// 4. 合併物件
const person2 = { name: "John", age: 30 };
const personDetails = { occupation: "Developer" };
const newPerson2 = { ...person2, ...personDetails };

// 5. Copy 物件
const person3 = { name: "John", age: 30 };
const copyPerson = { ...person3 };

// ===============================================

// Object Literal Shorthand 物件縮寫

// 1. 屬性縮寫
const nameC = "John";
const ageC = 30;
const personC = { nameC, ageC };

// 2. 方法縮寫
const personD = {
    nameD: "John",
    ageD: 30,
    printName() {
        console.log(this.nameD);
    },
};

// ===============================================

// Curry 柯里化

const multiply = (a: number) => (b: number) => a * b;
const multiplyByTwo = multiply(2);
const multiplyResult1 = multiplyByTwo(10); // 20
const multiplyResult2 = multiplyByTwo(5); // 10

// ===============================================

// Memoization 記憶化

const memoize = (fn: Function) => {
    const cache: { [key: string]: any } = {};
    return (...args: any) => {
        const stringifiedArgs = JSON.stringify(args);
        const result = (cache[stringifiedArgs] = cache[stringifiedArgs] || fn(...args));
        return result;
    };
};

// ===============================================

// Promises and Async/Await

// 1. Promise
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success!");
    }, 1000);
});

promise.then((value) => {
    console.log(value);
});

// 2. Async/Await
const asyncFunction = async () => {
    const result = await promise;
    console.log(result);
};

// ===============================================

// Closures 閉包

const createCounter = () => {
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
};

const counter = createCounter();
console.log(counter.getValue()); // 0
counter.increment();
console.log(counter.getValue()); // 1
counter.decrement();
console.log(counter.getValue()); // 0

// ===============================================

// Function Composition 函式組合
const addOne = (x: number) => x + 1;
const multiplyTwo = (x: number) => x * 2;
const compose =
    <T>(...fns: ((arg: T) => T)[]) =>
    (arg: T) =>
        fns.reduceRight((acc, fn) => fn(acc), arg);

// 從右側的函式開始執行
const addOneAndMultiplyTwo = compose(multiplyTwo, addOne);

const FuncComposeResult = addOneAndMultiplyTwo(3); // (3 + 1) * 2 = 8

// ===============================================

// Proxy 代理

const personE = {
    nameE: "John",
    ageE: 30,
};

const handler = {
    get(target: any, key: string) {
        if (key in target) {
            return `Hello, ${target[key]}!`;
        }
        return "Non-existent";
    },
};

const proxy = new Proxy(personE, handler);

console.log(proxy.nameE); // Hello, John!

// ===============================================

// Web Worker 網頁工作執行緒

// 主執行緒
const workerMain = new Worker("worker.js");
// 將資料傳給 Worker 執行緒
workerMain.postMessage({ numbers: [1, 2, 3, 4, 5] });

// 接收 Worker 執行緒的結果
workerMain.onmessage = (e) => {
    const result = e.data;
};

// Worker 執行緒
this.addEventListener("message", (e) => {
    const numbers = e.data.numbers;
    // 處理繁重的工作
    const result = numbers.map((n: number) => n * n);

    // 將結果回傳給主執行緒
    this.postMessage(result);
});

// ===============================================
