/**
 * ==============================
 * 這是一個命令模式的範例
 * ==============================
 */

// 命令模式的特點:
// 命令模式,是一種用一種中介的Class來做雙方的需求及狀態管理的模式

//以範例來說,客人點餐,服務生紀錄餐點,交由酒保調配
//過程屬於服務生要紀錄客人點了什麼,然後一次告知酒保
//若調製到一半時,客戶要求某一項調製品要取消,服務生必須能取消該項,並保持其餘的訂單的運作

//命令模式的好處是,客人不需要知道酒保的調配進度
//酒保不需要知道哪些客人分別點了哪些餐點,它只要把手上的調酒進度完成
//服務生也不需要知道酒保的調配進度,只要知道酒保完成了哪些調配品,就可以通知客人了

import { Bartender } from "./Classes/Bartender";
import { Waiter } from "./Classes/Waiter";
import { MixWhiskeyCommand } from "./Classes/MixWhiskeyCommand";
import { MixBeerCommand } from "./Classes/MixBeerCommand";
import { MixCocktailCommand } from "./Classes/MixCocktailCommand";

// 建立一個酒保
const bartender: Bartender = new Bartender();

// 建立命令清單
const mixWhiskeyCommand: MixWhiskeyCommand = new MixWhiskeyCommand(bartender);
const mixBeerCommand: MixBeerCommand = new MixBeerCommand(bartender);
const mixCocktailCommand: MixCocktailCommand = new MixCocktailCommand(bartender);

// 建立一個服務生
const waiter: Waiter = new Waiter();

// 點餐流程是,客人點餐->服務生紀錄->點餐完畢->告知酒保
// 開始進行點餐
console.log(waiter.SetOrder(mixWhiskeyCommand));
console.log(waiter.SetOrder(mixBeerCommand));
console.log(waiter.SetOrder(mixCocktailCommand));

// 交由酒保執行訂單
console.log(waiter.NotifyToExecuteOrder());

// 測試輸出結果
// node dist/Command/Main.js

// Output =>
// 收到訂單：Command.MixWhiskeyCommand
// 收到訂單：Command.MixBeerCommand
// 收到訂單：Command.MixCocktailCommand
// 通知酒保開始執行訂單作業
// 調製威士忌酒
// 調製啤酒
// 調製雞尾酒
