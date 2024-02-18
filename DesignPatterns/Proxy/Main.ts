/**
 * ==============================
 * 這是一個代理模式的範例
 * ==============================
 */

// 代理模式的特點:
// 這邊並沒有直接呼叫追求者的方法，而是透過代理者來呼叫
// 追求者已經被代理者取代了

import { SchoolGirl } from "./Classes/SchoolGirl";
import { SendGiveProxy } from "./Classes/SendGiveProxy";

// 建立一個女孩
const mm: SchoolGirl = new SchoolGirl();
mm.name = "小花";

// 建立一個代理者
const sendProxy: SendGiveProxy = new SendGiveProxy(mm);

// 輸出結果
console.log("代理者送禮開始");
console.log(sendProxy.GiveDolls());
console.log(sendProxy.GiveFlowers());
console.log(sendProxy.GiveChocolate());

// 測試輸出結果
// node dist/Proxy/Main.js

// Output =>
// 代理者送禮開始
// 小花，送你洋娃娃
// 小花，送你鮮花
// 我是代理者，我不會送巧克力
