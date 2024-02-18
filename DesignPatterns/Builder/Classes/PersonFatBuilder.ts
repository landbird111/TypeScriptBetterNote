import { SetArea } from "./SetArea";
import { PaintColor } from "./PaintColor";
import { PersonBuilder } from "./PersonBuilder";

/**
 * 胖子建造者
 */
export class PersonFatBuilder extends PersonBuilder {
    constructor(setArea: SetArea, paintColor: PaintColor) {
        super(setArea, paintColor);
    }

    public BuildHead(): void {
        this.BuildPart("頭部", 200, 100, "黃色");
    }

    public BuildBody(): void {
        this.BuildPart("身體", 200, 100, "黃色");
    }

    public BuildArmLeft(): void {
        this.BuildPart("左手", 100, 100, "黃色");
    }

    public BuildArmRight(): void {
        this.BuildPart("右手", 100, 100, "黃色");
    }

    public BuildLegLeft(): void {
        this.BuildPart("左腳", 100, 200, "黃色");
    }

    public BuildLegRight(): void {
        this.BuildPart("右腳", 100, 200, "黃色");
    }

    private BuildPart(partName: string, width: number, height: number, colorName: string): void {
        this.setArea.SetArea(partName, width, height);
        this.paintColor.PaintColor(partName, colorName);

        console.log(
            `建置${partName}位置，面積為${this.setArea.GetArea()}，顏色為${this.paintColor.GetColorName()}`
        );
    }
}
