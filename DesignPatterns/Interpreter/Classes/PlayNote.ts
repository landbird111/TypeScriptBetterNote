import { PlayExpression } from "../BaseClasses/PlayExpression";

/** 音符類別 */
export class PlayNote extends PlayExpression {
    execute(key: string, value: string): void {
        let note: string = "";

        switch (key) {
            case "C":
                note = "1"; // Do
                break;
            case "D":
                note = "2"; // Re
                break;
            case "E":
                note = "3"; // Mi
                break;
            case "F":
                note = "4"; // Fa
                break;
            case "G":
                note = "5"; // So
                break;
            case "A":
                note = "6"; // La
                break;
            case "B":
                note = "7"; // Si
                break;
            case "P":
                note = "X"; // 休止符
                break;
        }

        console.log(`音符: ${note}`);
    }
}
