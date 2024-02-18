/**
 * ==============================
 * 這是一個建造者模式的範例
 * ==============================
 */

// 建造者模式的特點:
// 將一個複雜物件的構建與它的表示分離，使得同樣的構建過程可以建立不同的表示
// 建造者適用於"建造過程穩定,像是工廠般的一步一步製作"的需求

import { SetArea } from "./Classes/SetArea";
import { PaintColor } from "./Classes/PaintColor";
import { PersonThinBuilder } from "./Classes/PersonThinBuilder";
import { PersonFatBuilder } from "./Classes/PersonFatBuilder";
import { PersonDirector } from "./Classes/PersonDirector";

let setArea: SetArea = new SetArea();
let paintColor: PaintColor = new PaintColor();

let personThinBuilder: PersonThinBuilder = new PersonThinBuilder(setArea, paintColor);
let personThinDirector: PersonDirector = new PersonDirector(personThinBuilder);

let personFatBuilder: PersonFatBuilder = new PersonFatBuilder(setArea, paintColor);
let personFatDirector: PersonDirector = new PersonDirector(personFatBuilder);

// 輸出結果
personThinDirector.CreatePerson();
// 建置頭部位置，面積為5000，顏色為黃色
// 建置身體位置，面積為5000，顏色為黃色
// 建置左手位置，面積為2500，顏色為黃色
// 建置右手位置，面積為2500，顏色為黃色
// 建置左腳位置，面積為5000，顏色為黃色
// 建置右腳位置，面積為5000，顏色為黃色

personFatDirector.CreatePerson();
// 建置頭部位置，面積為20000，顏色為黃色
// 建置身體位置，面積為20000，顏色為黃色
// 建置左手位置，面積為10000，顏色為黃色
// 建置右手位置，面積為10000，顏色為黃色
// 建置左腳位置，面積為20000，顏色為黃色
// 建置右腳位置，面積為20000，顏色為黃色

// 測試輸出結果
// node ..\dist\Builder\Main.js
