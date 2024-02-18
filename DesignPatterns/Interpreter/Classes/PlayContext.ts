/** 演奏類別 */
export class PlayContext {
    private playText: string = "";

    public get PlayText(): string {
        return this.playText;
    }

    public set PlayText(value: string) {
        this.playText = value;
    }
}
