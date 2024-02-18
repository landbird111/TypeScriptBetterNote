
/**
 * 建立一個Bartender類別，負責調酒，可視為公開的工作項目
 */
export class Bartender {
    public MixBeer(): string {
        //完成工作時,回應結果
        return "調酒師調了一杯啤酒";
    }

    public MixWhiskey(): string {
        //完成工作時,回應結果
        return "調酒師調了一杯威士忌";
    }

    public MixCocktail(): string {
        //完成工作時,回應結果
        return "調酒師調了一杯雞尾酒";
    }
}