/**
 * 建立一個 SchoolGirl 類別
 */
export class SchoolGirl {
    private _name!: string;

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        if (value.length > 0) {
            this._name = value;
        }
    }
}
