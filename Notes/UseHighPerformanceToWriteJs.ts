/**
 * =============================
 * 使用高效的方式撰寫 JavaScript
 * =============================
 */

// 這範例會先寫一個簡單的程式，然後再用高效的方式來改寫它

// ================================================================================

// 一般的陣列寫法
const numbers: number[] = [1, 2, 3, 4, 5];

// 含型別的陣列寫法
const uint8: Uint8Array = new Uint8Array([1, 2, 3, 4]);

// 如果資料是數字，所以可以使用TypedArray，處理效能會比較好

// Int8Array: 8-bit two's complement signed integer
// Uint8Array: 8-bit unsigned integer
// Uint8ClampedArray: 8-bit unsigned integer (clamped)
// Int16Array: 16-bit two's complement signed integer
// Uint16Array: 16-bit unsigned integer
// Int32Array: 32-bit two's complement signed integer
// Uint32Array: 32-bit unsigned integer
// Float32Array: 32-bit IEEE floating point number
// Float64Array: 64-bit IEEE floating point number

// Single 可以使用 Float32Array
// Double 可以使用 Float64Array
// Short 可以使用 Int16Array
// Long 可以使用 Int32Array
// integer 可以使用 Int8Array, Int16Array, Int32Array
// unsigned integer 可以使用 Uint8Array, Uint16Array, Uint32Array
// float 可以使用 Float32Array, Float64Array

// ================================================================================

// map() vs forEach()

// map / filter / reduce 這些函式，都會回傳一個新的陣列，而不會改變原本的陣列，相對效能
// 較差，因為會多一個新的陣列，但是可以避免改變原本的陣列

// 一般的寫法
const evens = numbers.filter((n) => n % 2 === 0);

// 高效的寫法
const evens2: Array<number> = [];
for (const n of numbers) {
    if (n % 2 === 0) {
        evens2.push(n);
    }
}

// 另一種高效的寫法
// 先設計計算的函式，再將函式傳入filter
const isEven = (n: number) => n % 2 === 0;
const evens3 = numbers.filter(isEven);

// ================================================================================

// 盡量避免使用影響陣列的函式，例如: splice, push, pop, shift, unshift, reverse, sort

// 一般的寫法
const unshiftArray = numbers.unshift(0);

// 高效的寫法
// 因為避開了影響陣列的函式，所以效能會比較好
const unshiftArray2 = [0, ...numbers];

// 其他注意事項

// 使用 concat 來附加陣列，而不是使用 push
// 使用展開運算符來插入/移除元素，而不是使用 splice
// 如果不需要被移除的元素，使用 slice 而不是 pop/shift

// ================================================================================

// 並行處理獨立的工作

// 例如: 計算正方形的面積

// 一般的寫法

// 序列處理
const squareSerial = numbers.map((n) => n * n);

// 並行處理
const squareParallel = numbers.map((n) => new Promise((resolve) => resolve(n * n)));

Promise.all(squareParallel).then((squares) => {});

// 其他的並行處理選項：

// Web workers - 將陣列工作分配給其他執行緒
// Array.parallelMap (提案中) - 內建於 JavaScript 的並行映射
// Third party libs like p-map - parallel array utilities

// ================================================================================

// 處理大量資料的陣列時，要注意記憶體的使用，限制每次處理的資料量大小

// 一般的寫法(沒注意記憶體使用)
const bigArray = new Array<number>(1000000).fill(0);

const sum = bigArray.reduce((acc, n) => acc + n, 0);

// 高效的寫法(每次限制1000筆進行處理)
const processArray: Array<number> = [];

// 每次只從bigArray取1000筆資料進行處理，一直到處理完為止，完成後再將結果加總
while (bigArray.length > 0) {
    const chunk = bigArray.splice(0, 1000);
    const total = chunk.reduce((acc: number, n: number) => acc + n, 0);
    processArray.push(total);
}

const total = processArray.reduce((acc: number, n: number) => acc + n, 0);

// ================================================================================

// 先過濾filter，再處理map

// 一般的寫法
const squareEven = numbers.filter((n: number) => n % 2 === 0).map((n: number) => n * n);

// 高效的寫法
const squareEven2: Array<number> = [];

const filterEven = numbers.filter((n: number) => n % 2 === 0);
const mapEven = filterEven.map((n: number) => n^2);

// ================================================================================

// 處理大量資料的陣列時，預先分配記憶體空間，會更有效率

// 一般的寫法
// 無長度的陣列
const noLengthArray: Array<number> = [];
for (let i = 0; i < 100; i++) {
    noLengthArray.push(i);
}

// 高效的寫法
// 有長度的陣列
const hasLengthArray: Array<number> = new Array(100);
for (let i = 0; i < 100; i++) {
    hasLengthArray[i] = i;
}

// 註: 但要注意需求，如果不確定陣列的長度，就盡量不要預先分配記憶體空間

// ================================================================================

// 將繁重的工作，交給其他執行緒處理，例如: Web workers

// 主執行緒
const worker = new Worker("worker.js");
// 將資料傳給 Worker 執行緒
worker.postMessage({ numbers });

// 接收 Worker 執行緒的結果
worker.onmessage = (e) => {
    const result = e.data;
};

// Worker 執行緒
onmessage = (e) => {
    const numbers = e.data.numbers;
    // 處理繁重的工作
    const result = numbers.map((n: number) => n * n);

    // 將結果回傳給主執行緒
    postMessage(result);
};

// 註: 呼叫worker協助處理會消耗傳遞的成本，所以要注意需求，不是所有的工作都適合交給worker處理

// ================================================================================

// 已經篩選過的資料，就不要再篩選一次

// 一般的寫法

// 這寫法會每次都篩選一次，效能較差
const squareEven3 = numbers.filter((n) => n % 2 === 0).map((n) => n * n);

// 高效的寫法

let filterData: Array<number> = [];

// 先篩選一次，再處理
const getFilterData = (arrNumbers: Array<number>) => {
    if (!filterData) {
        filterData = arrNumbers.filter((n) => n % 2 === 0);
    }

    return filterData.map((n) => n * n);
};

const squareEven4 = getFilterData(numbers);

// ================================================================================
