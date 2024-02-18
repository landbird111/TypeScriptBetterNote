import { IPaintColor } from "../Interfaces/IPaintColor";

export class PaintColor implements IPaintColor {
    private _partName: string;
    private _colorName: string;

    constructor() {
        this._partName = "None";
        this._colorName = "None";
    }
    
    GetPartName(): string {
        return this._partName;
    }

    GetColorName(): string {
        return this._colorName;
    }

    PaintColor(partName: string, colorName: string): void {
        this._partName = partName;
        this._colorName = colorName;
    }
}
