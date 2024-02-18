/** 角色狀態儲存箱 */
export class KnightRoleStateMemento {
    // 生命力
    public Vitality: number = 0;
    // 魔法力
    public MagicPower: number = 0;
    // 攻擊力
    public AttackPower: number = 0;
    // 防禦力
    public DefensePower: number = 0;

    constructor(vitality: number, magicPower: number, attackPower: number, defensePower: number) {
        this.Vitality = vitality;
        this.MagicPower = magicPower;
        this.AttackPower = attackPower;
        this.DefensePower = defensePower;
    }
}
