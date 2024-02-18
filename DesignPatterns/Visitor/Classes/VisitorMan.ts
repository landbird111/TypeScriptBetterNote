import {VisitorPersonBase} from './VisitorPersonBase';
import {VisitorActionBase} from './VisitorActionBase';

export class VisitorMan extends VisitorPersonBase {
    public accept(visitorAction: VisitorActionBase): string {
        return visitorAction.GetManConclusion(this);
    }
}