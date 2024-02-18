/**
 * ==============================
 * 這是一個中介者模式範例
 * ==============================
 */

// 中介者的特點:
// 用一個仲介物件來封裝一系列的物件互動。仲介者使各物件不需要"顯式"地互相參考，從而使其耦合鬆散，而且可以獨立
// 地改變它們之間的互動。

//仲介者的好處在於集中化管理,即"星狀式結構",而仲介者即中央的星星
//但仲介者的壞處也在於集中化管理,每個產生新的物件,都必須改動仲介者類別,使得仲介者的複雜性會提高

//迪米特法則:
//如果兩個類別不必彼此直接通訊,那麼這兩個類別就不應當發生直接的相互作用.
//如果其中一個類別需要調用另一個類別的某個方法,可以透過"第三者"(仲介)轉發這個調用

import { UnitedNationsSecurityCouncil } from "./Classes/UnitedNationsSecurityCouncil";
import { USACountry } from "./Classes/USACountry";
import { IRAQCountry } from "./Classes/IRAQCountry";

let theUnitedNationCouncil = new UnitedNationsSecurityCouncil();

let USA = new USACountry(theUnitedNationCouncil);
let IRAQ = new IRAQCountry(theUnitedNationCouncil);

theUnitedNationCouncil.usaCountry = USA;
theUnitedNationCouncil.iraqCountry = IRAQ;

// 輸出結果
console.log(USA.Send("伊拉克, 你好嗎?"));
console.log(IRAQ.Send("美國, 你好嗎?"));

// 測試輸出結果
// node dist/Mediator/Main.js

// Output =>
// 伊拉克獲得對方訊息: 美國, 你好嗎?
// 美國獲得對方訊息: 伊拉克, 你好嗎?
