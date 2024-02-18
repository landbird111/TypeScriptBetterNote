/**
 * ==============================
 * 這是一個裝飾者模式的範例
 * ==============================
 */

// 裝飾者模式的特點:
//動態地給一個物件加入一些額外的職責，就新增功能來說，
//裝飾模式比產生子類別更為靈活。

import { DecoratorPerson } from "./Classes/DecoratorPerson";
import { DecoratorBigSkirts } from "./Classes/DecoratorBigSkirts";
import { DecoratorSmallSkirts } from "./Classes/DecoratorSmallSkirts";
import { DecoratorTShirts } from "./Classes/DecoratorTShirts";
import { DecoratorBigTrouser } from "./Classes/DecoratorBigTrouser";
import { DecoratorSmallTrouser } from "./Classes/DecoratorSmallTrouser";


let decoratorPerson: DecoratorPerson = new DecoratorPerson("小菜");

let decoratorBigSkirts: DecoratorBigSkirts = new DecoratorBigSkirts();
let decoratorSmallSkirts: DecoratorSmallSkirts = new DecoratorSmallSkirts();
let decoratorTShirts: DecoratorTShirts = new DecoratorTShirts();
let decoratorBigTrouser: DecoratorBigTrouser = new DecoratorBigTrouser();
let decoratorSmallTrouser: DecoratorSmallTrouser = new DecoratorSmallTrouser();



console.log("第一種裝扮：\n");
decoratorTShirts.Decorate(decoratorPerson);         // 執行順序: 4
decoratorBigSkirts.Decorate(decoratorTShirts);      // 執行順序: 3
decoratorBigTrouser.Decorate(decoratorBigSkirts);   // 執行順序: 2
decoratorBigTrouser.Show();                         // 執行順序: 1

console.log("\n第二種裝扮：\n");
decoratorBigTrouser.Decorate(decoratorPerson);          // 執行順序: 5
decoratorBigSkirts.Decorate(decoratorBigTrouser);       // 執行順序: 4
decoratorTShirts.Decorate(decoratorBigSkirts);          // 執行順序: 3
decoratorSmallTrouser.Decorate(decoratorTShirts);       // 執行順序: 2
decoratorSmallSkirts.Decorate(decoratorSmallTrouser);   // 執行順序: 1
decoratorSmallSkirts.Show();

// 測試輸出結果
// node ..\dist\Decorator\Main.js

// Output =>
// 第一種裝扮：

// 大垮褲
// 大裙子
// 大T恤
// 裝扮的小菜

// 第二種裝扮：

// 小裙子
// 小垮褲
// 大T恤
// 大裙子
// 大垮褲
// 裝扮的小菜