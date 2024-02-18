/**
 * ==============================
 * 這是一個簡單的工廠模式範例
 * ==============================
 */

// 工廠模式的特點
// 定義一個用於建立物件的介面，讓子類別決定實體化哪一個類別。
// 工廠方法使一個類別的實例化延遲到其子類別

import { ICalcFactory } from "./Interfaces/ICalcFactory";
import { CalcOperation } from "./Classes/CalcOperation";
import { CalcOperationFactory } from "./Classes/CalcOperationFactory";

import { CalcAdditionFactory } from "./Classes/CalcAdditionFactory";
// import { CalcSubtractionFactory } from "./Classes/CalcSubtractionFactory";
// import { CalcMultipleFactory } from "./Classes/CalcMultipleFactory";
// import { CalcDivideFactory } from "./Classes/CalcDivideFactory";

import { CalcOperationType } from "./Enums/calcOperationType";

// 以下示範兩種不同的工廠模式

// 簡單工廠模式
console.log("簡單工廠模式 =>");
let simpleOperation: CalcOperation;

// 加法
simpleOperation = CalcOperationFactory.createCalcOperation(CalcOperationType.Addition);
simpleOperation.numberA = 1;
simpleOperation.numberB = 2;
console.log(
    `計算${simpleOperation.numberA} ${CalcOperationType.Addition} ${simpleOperation.numberB} 的結果: ${simpleOperation.getResult()}`
);

// 工廠模式
console.log("工廠模式 =>");
let factoryOperation: ICalcFactory = new CalcAdditionFactory(); // 這裡可以改成其他工廠
let calcWork: CalcOperation = factoryOperation.createOperation();
calcWork.numberA = 3;
calcWork.numberB = 4;
console.log(`計算${calcWork.numberA} ${CalcOperationType.Addition} ${calcWork.numberB} 的結果: ${calcWork.getResult()}`);

// 測試輸出結果
// node ..\dist\Factory\Main.js

// Output =>
// 簡單工廠模式 =>
// 計算1 + 2 的結果: 3
// 工廠模式 =>
// 計算3 + 4 的結果: 7
