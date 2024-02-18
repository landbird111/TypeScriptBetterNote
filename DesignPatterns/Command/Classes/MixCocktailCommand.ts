import { Command } from "./Command";
import { Bartender } from "./Bartender";

/**
 * 實作一個調雞尾酒命令，將調酒和酒保解耦
 */
export class MixCocktailCommand extends Command {
    constructor(receiver: Bartender) {
        super(receiver, "MixCocktailCommand");
    }

    public ExecuteCommand(): string {
        return this.receiver.MixCocktail();
    }
}
