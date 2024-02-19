import { Command } from "../BaseClasses/Command";
import { Bartender } from "./Bartender";

/**
 * 實作一個調啤酒命令，將調酒和酒保解耦
 */
export class MixBeerCommand extends Command {
    constructor(receiver: Bartender) {
        super(receiver, "MixBeerCommand");
    }

    public ExecuteCommand(): string {
        return this.receiver.MixBeer();
    }
}
