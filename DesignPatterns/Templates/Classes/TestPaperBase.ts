export class TestPaperBase {
    //#region 第一個題目和答案框架
    testQuestion1(): void {
        console.log("題目1 =>");
        console.log("楊過得到，後來給了郭靖，煉成倚天劍、屠龍刀的玄鐵可能是［］：\n");
        console.log("a.球磨鑄鐵 b.馬蹄鐵 c.高速合金鋼 d.碳素纖維\n");
        console.log("答案: " + this.answer1());
    }

    protected answer1(): string {
        return "";
    }

    //#endregion 第一個題目和答案框架

    //#region 第二個題目和答案框架
    testQuestion2(): void {
        console.log("題目2 => ");
        console.log("楊過、程英、陸無雙剷除了情花，造成［］：\n");
        console.log("a.使這種植物不再害人 b.使一種珍稀物種滅絕 c.破壞了那個生物圈的生態平衡 d.造成該地區沙漠化\n");
        console.log("答案: " + this.answer2());
    }

    protected answer2(): string {
        return "";
    }

    //#endregion 第二個題目和答案框架

    //#region 第三個題目和答案框架

    testQuestion3(): void {
        console.log("題目3 => ");
        console.log("藍鳳凰致使華山師徒、桃谷六仙嘔吐不止，如果你是大夫，會給他們開什麼藥［］：\n");
        console.log("a.阿司匹林 b.牛黃解毒片 c.氟呱酸 d.讓他們喝大量的生牛奶 e.以上全不對\n");
        console.log("答案: " + this.answer3());
    }

    protected answer3(): string {
        return "";
    }

    //#endregion 第三個題目和答案框架
}