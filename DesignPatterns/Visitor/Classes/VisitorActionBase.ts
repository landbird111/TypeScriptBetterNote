import { VisitorPersonBase} from './VisitorPersonBase';

export abstract class VisitorActionBase {
public abstract GetManConclusion(visitorMan: VisitorPersonBase): string;
public abstract GetWomanConclusion(visitorWoman: VisitorPersonBase): string;
}