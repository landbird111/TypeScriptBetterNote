import {VisitorPersonBase} from './VisitorPersonBase';
import {VisitorActionBase} from './VisitorActionBase';

export class VisitorWoman extends VisitorPersonBase {
    public accept(visitorAction: VisitorActionBase): string {
        return visitorAction.GetWomanConclusion(this);
    }
}