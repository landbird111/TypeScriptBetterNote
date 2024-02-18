import { KnightRoleStateMemento } from "./KnightRoleStateMemento";

/** 角色狀態儲存箱管理者 */
export class KnightRoleStateCaretaker {
    // 角色狀態儲存箱
    public knightRoleStateMemento: KnightRoleStateMemento = new KnightRoleStateMemento(0, 0, 0, 0);
}
