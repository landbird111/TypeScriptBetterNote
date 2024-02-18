import { Company } from "./Company";

export class CreateCompany extends Company {
    private _companyList: Company[] = [];
    private _Name: string;

    constructor(companyName: string) {
        super(companyName);
        this._Name = companyName;
    }

    Add(company: Company): void {
        this._companyList.push(company);
    }

    Remove(company: Company): void {
        this._companyList = this._companyList.filter((c) => c !== company);
    }

    Display(depth: number): string {
        let tmpString = `主階層(第${depth}層)==>${this._Name}\n`;

        for (let company of this._companyList) {
            tmpString += company.Display(depth + 2);
        }

        return tmpString;
    }

    CompanyDuty(): string {
        let tmpString = "";

        //執行支節點額外處理的功能
        for (let company of this._companyList) {
            tmpString += company.CompanyDuty();
        }

        return `${this._Name}轄下部門的責任是 ==> \n${tmpString}`;
    }
}
