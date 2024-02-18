/**
 * ==============================
 * 這是一個迭代器模式的範例
 * ==============================
 */

// 迭代器的特點:
// 提供一種方法依序存取一個聚合物件中各個元素,而又不暴露該物件的內部表示

import { ConcreteAggregate } from "./Classes/ConcreteAggregate";
import { ConcreteIteratorAsc } from "./Classes/ConcreteIteratorAsc";
import { ConcreteIteratorDesc } from "./Classes/ConcreteIteratorDesc";
import { Iterator } from "./Classes/Iterator";

// 建立一個聚集物件
const aggregateIterators: ConcreteAggregate<string> = new ConcreteAggregate<string>();

aggregateIterators.SetItem(0, "大鳥");
aggregateIterators.SetItem(1, "小菜");
aggregateIterators.SetItem(2, "行李");

// 建立一個迭代器
const iteratorAsc: Iterator<string> = new ConcreteIteratorAsc<string>(aggregateIterators);
const iteratorDesc: Iterator<string> = new ConcreteIteratorDesc<string>(aggregateIterators);

// 輸出結果
console.log("正向迭代器");
console.log(iteratorAsc.First());
while (!iteratorAsc.IsDone()) {
    console.log(iteratorAsc.Next());
}

console.log("反向迭代器");
console.log(iteratorDesc.First());
while (!iteratorDesc.IsDone()) {
    console.log(iteratorDesc.Next());
}

// 測試輸出結果
// node dist/Iterator/Main.js

// Output =>
// 正向迭代器
// 大鳥
// 小菜
// 行李
// 反向迭代器
// 行李
// 小菜
// 大鳥
