import { VisitorPersonBase } from "../BaseClasses/VisitorPersonBase";
import { VisitorActionBase } from "../BaseClasses/VisitorActionBase";

export class VisitorCentroid {
    public elements: VisitorPersonBase[] = [];

    public attach(element: VisitorPersonBase): void {
        this.elements.push(element);
    }

    public detach(element: VisitorPersonBase): void {
        const index = this.elements.indexOf(element);
        this.elements.splice(index, 1);
    }

    public display(visitorAction: VisitorActionBase): string {
        let result = "";
        for (const element of this.elements) {
            result += `${element.accept(visitorAction)}\n`;
        }
        return result;
    }
}
