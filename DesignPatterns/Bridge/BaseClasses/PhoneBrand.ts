import { CellphoneSoft } from "./CellphoneSoft";

/**
 * 手機品牌的抽象類別
 */
export abstract class PhoneBrand {
    protected cellPhoneSoft: CellphoneSoft | null = null;

    // 這裡是鬆耦合的關鍵，將軟體這個概念注入到手機品牌這個概念中
    // 可以依此類推，將不同的概念注入到手機品牌這個概念中，這樣就可以達到鬆耦合的目的
    setCellPhoneSoft(cellPhoneSoft: CellphoneSoft) {
        this.cellPhoneSoft = cellPhoneSoft;
    }

    abstract brandRun(): void;
}