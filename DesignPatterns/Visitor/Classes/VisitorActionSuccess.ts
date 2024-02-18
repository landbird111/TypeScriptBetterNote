import { VisitorMan } from "./VisitorMan";
import { VisitorWoman } from "./VisitorWoman";
import { VisitorActionBase } from "./VisitorActionBase";

export class VisitorActionSuccess extends VisitorActionBase {
    public GetManConclusion(visitorMan: VisitorMan): string {
        return `Man ${visitorMan.constructor.name} ${this.constructor.name} is successful.`;
    }

    public GetWomanConclusion(visitorWoman: VisitorWoman): string {
        return `Woman ${visitorWoman.constructor.name} ${this.constructor.name} is successful.`;
    }
}
