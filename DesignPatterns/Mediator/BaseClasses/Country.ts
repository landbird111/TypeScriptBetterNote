import { UnitedNations } from "./UnitedNations";

// 建立需要"被仲介"的物件抽象類別

/**
 * 國家的抽象類別
 */
export abstract class Country {
    protected mediator: UnitedNations;

    constructor(mediator: UnitedNations) {
        this.mediator = mediator;
    }
}
