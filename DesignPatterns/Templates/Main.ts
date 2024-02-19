/**
 * ==============================
 * 這是一個範例模式的主程式
 * ==============================
 */

// 範本模式的特點:
//定義一個操作中的演算法的骨架，而將一些步驟延遲到子類別中。
//範本方法使得子類別可以不改變一個演算法的結構，即可重定義該演算法的某些特定步驟

import { TestPaperA } from "./Classes/TestPaperA";
import { TestPaperB } from "./Classes/TestPaperB";
import { TestPaperBase } from "./BaseClasses/TestPaperBase";

let studentA: TestPaperBase = new TestPaperA();
let studentB: TestPaperBase = new TestPaperB();

console.log("學生A的答案:");
studentA.testQuestion1();
studentA.testQuestion2();
studentA.testQuestion3();

console.log("\n");

console.log("學生B的答案:");
studentB.testQuestion1();
studentB.testQuestion2();
studentB.testQuestion3();

// 測試輸出結果
// node ..\dist\Templates\Main.js

// Output =>
// 學生A的答案:
// 題目1 =>
// 楊過得到，後來給了郭靖，煉成倚天劍、屠龍刀的玄鐵可能是［］：

// a.球磨鑄鐵 b.馬蹄鐵 c.高速合金鋼 d.碳素纖維

// 答案: b
// 題目2 =>
// 楊過、程英、陸無雙剷除了情花，造成［］：

// a.使這種植物不再害人 b.使一種珍稀物種滅絕 c.破壞了那個生物圈的生態平衡 d.造成該地區沙漠化

// 答案: c
// 題目3 =>
// 藍鳳凰致使華山師徒、桃谷六仙嘔吐不止，如果你是大夫，會給他們開什麼藥［］：

// a.阿司匹林 b.牛黃解毒片 c.氟呱酸 d.讓他們喝大量的生牛奶 e.以上全不對

// 答案: a

// 學生B的答案:
// 題目1 =>
// 楊過得到，後來給了郭靖，煉成倚天劍、屠龍刀的玄鐵可能是［］：

// a.球磨鑄鐵 b.馬蹄鐵 c.高速合金鋼 d.碳素纖維

// 答案: a
// 題目2 =>
// 楊過、程英、陸無雙剷除了情花，造成［］：

// a.使這種植物不再害人 b.使一種珍稀物種滅絕 c.破壞了那個生物圈的生態平衡 d.造成該地區沙漠化

// 答案: c
// 題目3 =>
// 藍鳳凰致使華山師徒、桃谷六仙嘔吐不止，如果你是大夫，會給他們開什麼藥［］：

// a.阿司匹林 b.牛黃解毒片 c.氟呱酸 d.讓他們喝大量的生牛奶 e.以上全不對

// 答案: a
