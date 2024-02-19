import { VisitorMan } from "../Visitors/VisitorMan";
import { VisitorWoman } from "../Visitors/VisitorWoman";
import { VisitorActionBase } from "../../BaseClasses/VisitorActionBase";

export class VisitorActionFailed extends VisitorActionBase {
    public GetManConclusion(visitorMan: VisitorMan): string {
        return `Man ${visitorMan.constructor.name} ${this.constructor.name} is failed.`;
    }

    public GetWomanConclusion(visitorWoman: VisitorWoman): string {
        return `Woman ${visitorWoman.constructor.name} ${this.constructor.name} is failed.`;
    }
}
