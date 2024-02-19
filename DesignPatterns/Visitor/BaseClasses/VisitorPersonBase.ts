import { VisitorActionBase } from "./VisitorActionBase";

export abstract class VisitorPersonBase {
    public abstract accept(visitorAction: VisitorActionBase): string;
}
