import { PlayExpression } from "./PlayExpression";

/** 音速類別 */
export class PlaySpeed extends PlayExpression {
    execute(key: string, value: string): void {
        let speed: string = "";

        if (+value < 500) {
            speed = "快速";
        } else if (+value >= 1000) {
            speed = "慢速";
        } else {
            speed = "中速";
        }

        console.log(`速度: ${speed}`);
    }
}
