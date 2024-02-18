/**
 * 抽離軟體這個概念
 */
export abstract class CellphoneSoft {
    abstract Run(): void;
}

// 注意: 這邊不是直接實作，而是定義一個抽象類別，讓子類別去實作