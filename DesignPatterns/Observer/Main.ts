/**
 * ==============================
 * 這是一個觀察者模式的範例
 * ==============================
 */

// 觀察者模式的特點:
// 定義了一種一對多的依賴關係，讓多個觀察者物件同時監聽某一個主題物件。
// 這個主題物件在狀態發生變化時，會通知所有觀察者物件，使它們能夠自動更新自己。

import { OfficeSecretary } from "./Classes/OfficeSecretary";
import { OfficePeekNBA } from "./Classes/OfficePeekNBA";
import { OfficePeekStock } from "./Classes/OfficePeekStock";

// 建立通知者
let secretary: OfficeSecretary = new OfficeSecretary();

// 建立觀察者
let peekNBA: OfficePeekNBA = new OfficePeekNBA("小菜", secretary);
let peekStock: OfficePeekStock = new OfficePeekStock("老王", secretary);

// 加入觀察者
secretary.attach(peekNBA);
secretary.attach(peekStock);

// 通知觀察者
secretary.subjectState = "老闆回來了！";
secretary.notify();

// 測試輸出結果
// node ..\dist\Observer\Main.js

// Output =>
// 收到通知: 老闆回來了！，小菜 關閉NBA直播畫面，繼續工作！
// 收到通知: 老闆回來了！，老王 關閉股票行情，繼續工作！