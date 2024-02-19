import {VisitorPersonBase} from '../../BaseClasses/VisitorPersonBase';
import {VisitorActionBase} from '../../BaseClasses/VisitorActionBase';

export class VisitorWoman extends VisitorPersonBase {
    public accept(visitorAction: VisitorActionBase): string {
        return visitorAction.GetWomanConclusion(this);
    }
}