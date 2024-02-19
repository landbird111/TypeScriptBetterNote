import {VisitorPersonBase} from '../../BaseClasses/VisitorPersonBase';
import {VisitorActionBase} from '../../BaseClasses/VisitorActionBase';

export class VisitorMan extends VisitorPersonBase {
    public accept(visitorAction: VisitorActionBase): string {
        return visitorAction.GetManConclusion(this);
    }
}