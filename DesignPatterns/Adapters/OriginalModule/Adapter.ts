import { AdapterSource } from "./AdapterSource";
import { AdapterTarget } from "./AdapterTarget";

/**
 * 透過繼承的方式實作的類別轉接器
 * 在內部包裝一個需要被轉接的類別，把原始的介面轉換成目標的介面
 */
export class Adapter extends AdapterTarget {
    // 建立一個私有的轉換類別，要被轉換的類別
    private source: AdapterSource = new AdapterSource();

    // 提供轉接器擁有轉換的方法
    public request(): void {
        this.source.specificRequest();
    }
}
