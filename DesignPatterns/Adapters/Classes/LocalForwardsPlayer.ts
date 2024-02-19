import { LocalPlayer } from "../BaseClasses/LocalPlayer";

/**
 * 本地前鋒球員
 */
export class LocalForwardsPlayer extends LocalPlayer {
    constructor(playerName: string) {
        super(playerName);
    }

    attack(): void {
        console.log(`前鋒 ${this.playerName} 進攻`);
    }

    defense(): void {
        console.log(`前鋒 ${this.playerName} 防守`);
    }
}
