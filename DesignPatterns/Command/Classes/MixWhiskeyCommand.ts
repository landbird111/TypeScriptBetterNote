import { Command } from "../BaseClasses/Command";
import { Bartender } from "./Bartender";

/**
 * 實作一個調威士忌酒命令，將調酒和酒保解耦
 */
export class MixWhiskeyCommand extends Command {
    constructor(receiver: Bartender) {
        super(receiver, "MixWhiskeyCommand");
    }

    public ExecuteCommand(): string {
        return this.receiver.MixWhiskey();
    }
}
