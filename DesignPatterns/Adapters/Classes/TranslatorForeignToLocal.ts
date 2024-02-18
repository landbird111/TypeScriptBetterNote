import { LocalPlayer } from "./LocalPlayer";
import { ForeignCenterPlayer } from "./ForeignCenterPlayer";

/**
 * 翻譯人員類別
 */
export class TranslatorForeignToLocal extends LocalPlayer {
    private foreignCenterPlayer: ForeignCenterPlayer;

    constructor(playerName: string) {
        super(playerName);
        this.foreignCenterPlayer = new ForeignCenterPlayer(playerName);
    }

    /**
     * 讓外籍中鋒球員理解本地教練要求進攻的指令
     */
    attack(): void {
        this.foreignCenterPlayer.foreignAttack();
    }

    /**
     * 讓外籍中鋒球員理解本地教練要求防守的指令
     */
    defense(): void {
        this.foreignCenterPlayer.foreignDefense();
    }
}
