import { LocalPlayer } from "../BaseClasses/LocalPlayer";

/**
 * 本地後衛球員
 */
export class LocalGuardsPlayer extends LocalPlayer {
    constructor(playerName: string) {
        super(playerName);
    }

    attack(): void {
        console.log(`後衛 ${this.playerName} 進攻`);
    }

    defense(): void {
        console.log(`後衛 ${this.playerName} 防守`);
    }
}
