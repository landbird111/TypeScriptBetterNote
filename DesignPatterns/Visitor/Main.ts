/**
 * ==============================
 * 這是訪問者模式(Visitor)的程式碼
 * ==============================
 */

// 訪問者的特點:
//表示一個作用於某物件結構中的各元素之操作。
//它使你可以在不改變各元素之類別的前提下，定義作用於這些元素的新操作。
//訪問者模式適用於資料結構「相對穩定」的系統。
//它把資料結構和作用於結構上的操作之間的耦合解脫開，使得操作集合可以相對自由地演化。

//要注意，不要為了展示自己有多強,而嘗試將訪問者模式應用至實作上，必須真的需要時，才實作它。
//大多數是不需要用到訪問者的，因為資料結構很難不發生變化。
//但若是平常類型的，如:男/女的結構，極強的穩定性時，才會考量用到。

import {VisitorCentroid} from './Classes/VisitorCentroid';
import { VisitorMan } from './Classes/Visitors/VisitorMan';
import { VisitorWoman } from './Classes/Visitors/VisitorWoman';
import {VisitorActionSuccess} from './Classes/VisitorAction/VisitorActionSuccess';
import {VisitorActionFailed} from './Classes/VisitorAction/VisitorActionFailed';
import {VisitorActionFallInLove} from './Classes/VisitorAction/VisitorActionFallInLove';

let centroid: VisitorCentroid = new VisitorCentroid();
centroid.attach(new VisitorMan());
centroid.attach(new VisitorWoman());

// 成功時的輸出
console.log('Success:');
console.log(centroid.display(new VisitorActionSuccess()));

// 失敗時的輸出
console.log('Failed:');
console.log(centroid.display(new VisitorActionFailed()));

// 戀愛時的輸出
console.log('Fall in love:');
console.log(centroid.display(new VisitorActionFallInLove()));

// 測試輸出結果
// node ..\dist\Visitor\Main.js

// Output =>
// Success:
// Man VisitorMan VisitorActionSuccess is successful.
// Woman VisitorWoman VisitorActionSuccess is successful.

// Failed:
// Man VisitorMan VisitorActionFailed is failed.
// Woman VisitorWoman VisitorActionFailed is failed.

// Fall in love:
// Man VisitorMan VisitorActionFallInLove is falling in love.
// Woman VisitorWoman VisitorActionFallInLove is falling in love.