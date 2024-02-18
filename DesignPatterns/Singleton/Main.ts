/**
 * ==============================
 * 這是一個獨體模式的範例
 * ==============================
 */

// 獨體模式的特點:
// 保證一個類別僅有一個實體，並提供一個存取它的全域訪問點。
// 這樣可以防止記憶體被大量濫用。（若未防止，用戶端可大量的執行new物件的動作）

import { Singleton } from "./Classes/Singleton";

// 獨體模式的物件，不能用此方法取得
// let newSingleton: Singleton = new Singleton();

// 建立一個獨體模式的物件，只能用此方法取得
let mySingleton: Singleton = Singleton.getInstance();
console.log(`my name is ${mySingleton.getManagerParameter().managerName}`);
console.log(`my age is ${mySingleton.getManagerParameter().managerAge}`);
console.log(`my type is ${mySingleton.getManagerParameter().manageType}`);

// 測試輸出結果
// node ..\dist\Singleton\Main.js

// Output =>
// my name is 張三
// my age is 30
// my type is 資訊部