/**
 * ==============================
 * 這是一個橋接模式的範例
 * ==============================
 */

// 橋接模式的特點:
// 將抽象部份與它的實現部分分離，使它們都可以獨立地變化
// 實現指的是抽象類別和它的衍生類別用來實現自己的物件

// 重要的概念 =>
// 繼承是一種強耦合，因為子類別和父類別是緊密相連的
// 橋接模式是一種弱耦合，因為抽象和實現是分開的，它優先的考慮了彼此的關係，於是先做了"聚合"及"合成"的
// 概念，再來實現繼承，因此讓讓類別之間各自擁有了緊耦合及鬆耦合的功能
// 所謂的"聚合"，表示A可以擁有B的物件，但B不是A的一部份(即PhoneBrand中的setCellPhoneSoft方法)
// 所謂的"合成"，表示A依賴B的物件來的，B是A的一部份(就是一般的繼承)

// 假設有一個手機軟體，可以讓使用者操作手機
// 需求目標為：手機內要有軟體協助使用者操作
// 另外，需可提供給Ｎ牌和Ｍ牌的廠商來用

// PhoneBrand就是一個"群體"，就是A
// CellPhoneSoft就是一個個"個體"，各自有其功能，就是B

// 以下是實例
// 建立N牌手機的軟體
import { PhoneBrandN } from "./Classes/PhoneBrand/PhoneBrandN";
import { PhoneBrandM } from "./Classes/PhoneBrand/PhoneBrandM";
import { PhoneBrandZ } from "./Classes/PhoneBrand/PhoneBrandZ";

import { CellPhoneGame } from "./Classes/CellPhone/CellPhoneGame";
import { CellPhoneAddressList } from "./Classes/CellPhone/CellPhoneAddressList";
import { CellPhonePhoto } from "./Classes/CellPhone/CellPhonePhoto";

let phoneN = new PhoneBrandN();
// 讓N品牌的手機執行遊戲
phoneN.setCellPhoneSoft(new CellPhoneGame());
phoneN.brandRun();
// 讓N品牌的手機執行通訊錄
phoneN.setCellPhoneSoft(new CellPhoneAddressList());
phoneN.brandRun();
// 接著，若要讓N品牌的手機執行照相或是其他功能，只要再新增一個CellPhoneSoft的子類別即可
// 讓N品牌的手機執行照相
phoneN.setCellPhoneSoft(new CellPhonePhoto());
phoneN.brandRun();

// 建立M牌手機的軟體
let phoneM = new PhoneBrandM();
// 讓M品牌的手機執行遊戲
phoneM.setCellPhoneSoft(new CellPhoneGame());
phoneM.brandRun();
// 讓M品牌的手機執行通訊錄(可以取消此功能，也不影響其他功能的執行)
// phoneM.setCellPhoneSoft(new CellPhoneAddressList());
// phoneM.brandRun();

// 由此可推，要再增加一個Z牌或是新的手機品牌，都不會影響到原本的程式碼
// 建立Z牌手機的軟體
let phoneZ = new PhoneBrandZ();
// 讓Z品牌的手機執行通訊錄
phoneZ.setCellPhoneSoft(new CellPhoneAddressList());
phoneZ.brandRun();
// 讓Z品牌的手機執行照相
phoneZ.setCellPhoneSoft(new CellPhonePhoto());
phoneZ.brandRun();

// 測試輸出結果
// node ..\dist\Bridge\Main.js

// Output =>
// N牌手機
// 執行手機遊戲
// N牌手機
// 執行手機通訊錄
// N牌手機
// 執行手機相機
// M牌手機
// 執行手機遊戲
// Z牌手機
// 執行手機通訊錄
// Z牌手機
// 執行手機相機