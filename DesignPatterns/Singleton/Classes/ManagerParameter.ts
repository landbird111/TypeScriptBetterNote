/**
 * 管理者参数
 */
export class ManagerParameter {
    managerName: string;
    manageType: string;
    managerAge: number;

    constructor(managerName: string, manageType: string, managerAge: number) {
        this.managerName = managerName;
        this.manageType = manageType;
        this.managerAge = managerAge;
    }
}