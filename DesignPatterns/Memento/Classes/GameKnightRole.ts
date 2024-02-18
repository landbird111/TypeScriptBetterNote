import { KnightRoleStateMemento } from "./KnightRoleStateMemento";

export class GameKnightRole {
    // 生命力
    public Vitality: number = 0;
    // 魔法力
    public MagicPower: number = 0;
    // 攻擊力
    public AttackPower: number = 0;
    // 防禦力
    public DefensePower: number = 0;

    /** 顯示目前狀態 */
    public StateDisplay(): void {
        console.log("目前狀態:");
        console.log("生命力: " + this.Vitality);
        console.log("魔法力: " + this.MagicPower);
        console.log("攻擊力: " + this.AttackPower);
        console.log("防禦力: " + this.DefensePower);
        console.log("");
    }

    /** 取得初始狀態 */
    public GetInitState(): void {
        this.Vitality = 100;
        this.MagicPower = 100;
        this.AttackPower = 100;
        this.DefensePower = 100;
    }

    /** 戰鬥 */
    public Fight(): void {
        this.Vitality = 0;
        this.MagicPower = 0;
        this.AttackPower = 0;
        this.DefensePower = 0;
    }

    /**
     * 保存角色狀態
     * @returns 回傳角色狀態儲存箱
     */
    public SaveState(): KnightRoleStateMemento {
        // 將遊戲角色的所有狀態值透過實體化,角色狀態儲存箱後傳回
        return new KnightRoleStateMemento(
            this.Vitality,
            this.MagicPower,
            this.AttackPower,
            this.DefensePower
        );
    }

    /**
     * 還原角色狀態
     * @param memento 角色狀態儲存箱
     */
    public RecoveryState(memento: KnightRoleStateMemento): void {
        //可將外部的"角色狀態儲存箱"中狀態值恢復給遊戲角色
        this.Vitality = memento.Vitality;
        this.MagicPower = memento.MagicPower;
        this.AttackPower = memento.AttackPower;
        this.DefensePower = memento.DefensePower;
    }
}
