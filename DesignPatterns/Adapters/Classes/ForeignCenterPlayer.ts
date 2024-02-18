/**
 * 外籍中鋒球員
 */
export class ForeignCenterPlayer {
    private playerName: string;

    constructor(playerName: string) {
        this.playerName = playerName;
    }

    public foreignAttack(): void {
        console.log(`外籍中鋒 ${this.playerName} 進攻`);
    }

    public foreignDefense(): void {
        console.log(`外籍中鋒 ${this.playerName} 防守`);
    }
}
