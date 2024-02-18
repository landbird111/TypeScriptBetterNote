/**
 * ==============================
 * 這是一個備忘錄模式的範例
 * ==============================
 */

// 備忘錄模式的特點:
//在不破壞封裝性的前提下，捕獲一個物件的內部狀態，並在該物件之外保存這個狀態。
//這樣以後就可將該物件恢復到原先保存的狀態。

//實際應用的範圍：
//像是遊戲存檔～或是Insert資料前的備份～或是物件前的資料備份

import { GameKnightRole } from "./Classes/GameKnightRole";
import { KnightRoleStateCaretaker } from "./Classes/KnightRoleStateCaretaker";

// 大戰BOSS前
let coolKnight: GameKnightRole = new GameKnightRole();
coolKnight.GetInitState();
console.log("大戰BOSS前=>");
coolKnight.StateDisplay();

// 保存進度
let caretaker: KnightRoleStateCaretaker = new KnightRoleStateCaretaker();
console.log("保存進度=>\n");
caretaker.knightRoleStateMemento = coolKnight.SaveState();

// 大戰BOSS時，損耗嚴重
coolKnight.Fight();
console.log("大戰BOSS後=>");
coolKnight.StateDisplay();

// 恢復之前的狀態
coolKnight.RecoveryState(caretaker.knightRoleStateMemento);
console.log("恢復後=>");
coolKnight.StateDisplay();

// 測試輸出結果
// node ..\dist\Memento\Main.js

// Output =>
// 大戰BOSS前=>
// 目前狀態:
// 生命力: 100
// 魔法力: 100
// 攻擊力: 100
// 防禦力: 100

// 保存進度=>

// 大戰BOSS後=>
// 目前狀態:
// 生命力: 0
// 魔法力: 0
// 攻擊力: 0
// 防禦力: 0

// 恢復後=>
// 目前狀態:
// 生命力: 100
// 魔法力: 100
// 攻擊力: 100
// 防禦力: 100