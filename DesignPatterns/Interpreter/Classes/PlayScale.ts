import { PlayExpression } from "./PlayExpression";

/** 音階類別 */
export class PlayScale extends PlayExpression {
    execute(key: string, value: string): void {
        let scale: string = "";

        switch (value) {
            case "1":
                scale = "低音";
                break;
            case "2":
                scale = "中音";
                break;
            case "3":
                scale = "高音";
                break;
        }

        console.log(`音階: ${scale}`);
    }
}
