/**
 * ==============================
 * 這是一個解譯器模式的範例
 * ==============================
 */

// 解譯器的特點：
//給定一個語言，定義它的文化的一種表示，並定義一個解譯器，這個解譯器使用該表示來解譯語言中的句子。

//如果一種特定類型的問題發生的頻率夠高，那麼可能就值得將該問題的各個實體表達為一個簡單語言中的句子。
//這樣就可以構建一個解譯器，該解譯器透過解譯這些句子來解決該問題。

import { PlayContext } from "./Classes/PlayContext";
import { PlayExpression } from "./BaseClasses/PlayExpression";
import { PlayScale } from "./Classes/PlayScale";
import { PlaySpeed } from "./Classes/PlaySpeed";
import { PlayNote } from "./Classes/PlayNote";

console.log("上海灘：");
let playContext: PlayContext = new PlayContext();

//改動前
playContext.PlayText =
    "O 2 E 0.5 G 0.5 A 3 E 0.5 G 0.5 D 3 E 0.5 G 0.5 A 0.5 O 3 C 1 O 2 A 0.5 G 1 C 0.5 E 0.5 D 3 ";
//改動後,增加音速文法
// playContext.PlayText =
//     "T 500 O 2 E 0.5 G 0.5 A 3 E 0.5 G 0.5 D 3 E 0.5 G 0.5 A 0.5 O 3 C 1 O 2 A 0.5 G 1 C 0.5 E 0.5 D 3 ";

let playExpression: PlayExpression | null = null;

try {
    while (playContext.PlayText.length > 0) {
        let str: string = playContext.PlayText.substring(0, 1);

        switch (str) {
            //為O時,就換成音階
            case "O":
                playExpression = new PlayScale();
                break;
            //為T時,就換成語速
            case "T":
                playExpression = new PlaySpeed();
                break;
            //C/D/E/F/G/A/B和P時,實體化為音符
            case "C":
            case "D":
            case "E":
            case "F":
            case "G":
            case "A":
            case "B":
            case "P":
                playExpression = new PlayNote();
                break;
        }

        if (playExpression) {
            playExpression.interpret(playContext);
        }
    }
} catch (error) {
    console.log(error);
}

// 測試輸出結果
// node ..\dist\Interpreter\Main.js

// Output =>
// ==== 改動前 ====
// 上海灘：
// 音階: 中音
// 音符: 3
// 音符: 5
// 音符: 6
// 音符: 3
// 音符: 5
// 音符: 2
// 音符: 3
// 音符: 5
// 音符: 6
// 音階: 高音
// 音符: 1
// 音階: 中音
// 音符: 6
// 音符: 5
// 音符: 1
// 音符: 3
// 音符: 2

// ==== 改動後，增加音速 ====
// 上海灘：
// 速度: 中速
// 音階: 中音
// 音符: 3
// 音符: 5
// 音符: 6
// 音符: 3
// 音符: 5
// 音符: 2
// 音符: 3
// 音符: 5
// 音符: 6
// 音階: 高音
// 音符: 1
// 音階: 中音
// 音符: 6
// 音符: 5
// 音符: 1
// 音符: 3
// 音符: 2
