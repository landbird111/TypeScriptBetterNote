import { LocalPlayer } from "./LocalPlayer";

/**
 * 本地中鋒球員
 */
export class LocalCenterPlayer extends LocalPlayer {
    constructor(playerName: string) {
        super(playerName);
    }

    attack(): void {
        console.log(`中鋒 ${this.playerName} 進攻`);
    }

    defense(): void {
        console.log(`中鋒 ${this.playerName} 防守`);
    }
}
