import { PlayContext } from "../Classes/PlayContext";

export abstract class PlayExpression {
    public interpret(context: PlayContext): void {
        if (context.PlayText.length === 0) {
            return;
        }

        //此方法用於從演奏文字中的第一條命令裡頭，取得命令字母(第一個字元)和其參數值(除了第一個字元外的字元)
        const playKey = context.PlayText.substring(0, 1);
        context.PlayText = context.PlayText.substring(2);

        const playValue = context.PlayText.substring(0, context.PlayText.indexOf(" "));
        context.PlayText = context.PlayText.substring(context.PlayText.indexOf(" ") + 1);

        this.execute(playKey, playValue);
    }

    /** 抽象方法"執行"，不同的文法子類別，有不同的執行處理 */
    abstract execute(key: string, value: string): void;
}
