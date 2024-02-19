import { IPaintColor } from "../Interfaces/IPaintColor";
import { ISetArea } from "../Interfaces/ISetArea";

/**
 * 人物建造者抽象類別
 */
export abstract class PersonBuilder {
    protected setArea: ISetArea;
    protected paintColor: IPaintColor;

    constructor(setArea: ISetArea, paintColor: IPaintColor) {
        this.setArea = setArea;
        this.paintColor = paintColor;
    }

    public abstract BuildHead(): void;
    public abstract BuildBody(): void;
    public abstract BuildArmLeft(): void;
    public abstract BuildArmRight(): void;
    public abstract BuildLegLeft(): void;
    public abstract BuildLegRight(): void;
}
