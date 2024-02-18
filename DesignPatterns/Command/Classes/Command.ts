import { Bartender } from "./Bartender";

/**
 * 建立一個命令模式的抽象命令
 */
export abstract class Command {
    //(即點單的動作,亦可想像成是服務生命令酒保執行調製的行為)
    protected receiver: Bartender; //注意: 這邊是酒保(接收者)

    protected commandName = ""; //命令名稱

    //鬆耦合設計
    constructor(receiver: Bartender, commandName: string) {
        this.receiver = receiver;
        this.commandName = commandName;
    }

    /** 執行命令的動作 */
    abstract ExecuteCommand(): void;

    /** 取得目前的命令名稱 */
    public get GetCommandName(): string {
        return this.commandName;
    }
}
