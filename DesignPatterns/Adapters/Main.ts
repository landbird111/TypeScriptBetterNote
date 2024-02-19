/**
 * ==============================
 * 這是轉接器模式的範例
 * ==============================
 */

// 轉接器模式的特點:
// 將一個類別的介面轉換成客戶希望的另一個介面。
// Adapter模式使得原本由於介面不相容而不能一起工作的那些類別可以一起工作

import { AdapterTarget } from "./OriginalModule/AdapterTarget";
import { Adapter } from "./OriginalModule/Adapter";

// 不使用轉接器的實體
let originalTarget: AdapterTarget = new AdapterTarget();
originalTarget.request();

// 建立轉接器的實體
let sampleTarget: AdapterTarget = new Adapter();
sampleTarget.request();

// 測試輸出結果
// node ..\dist\Adapters\Main.js

// Output =>
// 一般的普通請求
// 特殊的請求

// ==============================

import { LocalForwardsPlayer } from "./Classes/LocalForwardsPlayer";
import { LocalGuardsPlayer } from "./Classes/LocalGuardsPlay";
import { LocalCenterPlayer } from "./Classes/LocalCenterPlayer";
import { TranslatorForeignToLocal } from "./Classes/TranslatorForeignToLocal";

// 建立本地前鋒球員實體
let localForwardsPlayer: LocalForwardsPlayer = new LocalForwardsPlayer("本土前鋒球員");
localForwardsPlayer.attack();

// 建立本地後衛球員實體
let localGuardsPlayer: LocalGuardsPlayer = new LocalGuardsPlayer("本土後衛球員");
localGuardsPlayer.defense();

// 建立本地中鋒球員實體
// let localCenterPlayer: LocalCenterPlayer = new LocalCenterPlayer("柯瑞");
// localCenterPlayer.attack(); // 柯瑞聽不懂中文，所以無法進攻

// 建立外籍中鋒球員實體 (注意: 這裡不是new出外籍人員實體，而是翻譯人員)
let foreignCenterPlayer: LocalCenterPlayer = new TranslatorForeignToLocal("柯瑞");
foreignCenterPlayer.attack(); // 柯瑞經由翻譯人員而聽得懂中文指令，所以可以進攻

// 測試輸出結果
// node ..\dist\Adapters\Main.js

// Output =>
// 前鋒 本土前鋒球員 進攻
// 後衛 本土後衛球員 防守
// 外籍中鋒 柯瑞 進攻
