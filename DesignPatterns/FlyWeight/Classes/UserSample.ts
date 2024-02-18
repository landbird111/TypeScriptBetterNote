import { IUserSample } from "../Interfaces/IUserSample";

/**
 * 不是很重要的類別，只是用來展示如何使用享元模式
 */
export class UserSample implements IUserSample {
    private _userName: string;

    constructor(userName: string) {
        this._userName = userName;
    }

    public get userName(): string {
        return this._userName;
    }
}
