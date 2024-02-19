/**
 * ==============================
 * 這是一個策略模式的範例
 * ==============================
 */

// 策略模式的特點:
//它定義了演算法家族，分別封裝起來，讓它們之間可以互相替換，此模式讓演算法的變化，
//不會影響到使用演算法的客戶。

import { CashChargeBase } from "./BaseClasses/CashChargeBase";
import { CashChargeNormal } from "./Classes/CashChargeNormal";
import { CashChargeRebate } from "./Classes/CashChargeRebate";
import { CashChargeReturn } from "./Classes/CashChargeReturn";

let money: number = 500;

let normalCharge: CashChargeBase = new CashChargeNormal();
console.log(`正常消費 => 原價: ${money}, 現價: ${normalCharge.charge(money)}`);

let rebateCharge: CashChargeBase = new CashChargeRebate(0.8);
console.log(`打折消費 => 原價: ${money}, 現價: ${rebateCharge.charge(money)}`);

let returnCharge: CashChargeBase = new CashChargeReturn(300, 100);
console.log(`消費返利 => 原價: ${money}, 現價: ${returnCharge.charge(money)}`);

// 測試輸出結果
// node ..\dist\Strategy\Main.js

// Output =>
// 正常消費 => 原價: 500, 現價: 500
// 打折消費 => 原價: 500, 現價: 400
// 消費返利 => 原價: 500, 現價: 400