import { Company } from "./Company";

export class CreateCommonWorkDepart extends Company {
    private _Name: string;

    constructor(companyName: string) {
        super(companyName);
        this._Name = companyName;
    }

    Add(company: Company): void {
        // 一般工作部門不具有新增功能
        // 假定這個是最後一個節點
    }
    
    Remove(company: Company): void {
        // 一般工作部門不具有移除功能
        // 假定這個是最後一個節點
    }

    Display(depth: number): string {
        return `子階層(第${depth}層)==>${this._Name}\n`;
    }

    CompanyDuty(): string {
        return `${this._Name}的責任是一般工作\n`;
    }
}