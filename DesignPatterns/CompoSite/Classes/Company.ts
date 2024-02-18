import { ICompany } from "../Interfaces/ICompany";

export abstract class Company implements ICompany<Company> {
    protected CompanyName: string;

    /**
     * 建構子，設定公司名稱
     */
    constructor(companyName: string) {
        this.CompanyName = companyName;
    }

    //#region 建立基礎結構

    /** 新增節點元件 */
    abstract Add(company: Company): void;
    /** 移除節點元件 */
    abstract Remove(company: Company): void;
    /** 顯示結果 */
    abstract Display(depth: number): string;

    //#endregion

    //#region 建立其他的功能

    /** 公司責任說明 */
    abstract CompanyDuty(): string;

    //#endregion
}
