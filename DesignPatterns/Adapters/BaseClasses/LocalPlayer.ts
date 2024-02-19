/**
 * 本地球員
 */
export abstract class LocalPlayer {
    protected playerName: string;

    constructor(playerName: string) {
        this.playerName = playerName;
    }

    abstract attack(): void;
    abstract defense(): void;
}
