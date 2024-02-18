import { ISetArea } from "../Interfaces/ISetArea";

export class SetArea implements ISetArea {
    private _partName: string;
    private _width: number;
    private _height: number;

    constructor() {
        this._partName = "None";
        this._width = 0;
        this._height = 0;
    }

    GetPartName(): string {
        return this._partName;
    }

    SetWidth(partName: string, width: number): void {
        this._partName = partName;
        this._width = width;
    }

    SetHeight(partName: string, height: number): void {
        this._partName = partName;
        this._height = height;
    }

    SetArea(partName: string, width: number, height: number): void {
        this._partName = partName;
        this._width = width;
        this._height = height;
    }
    
    GetArea(): number {
        return this._width * this._height;
    }
}
