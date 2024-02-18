import { Country } from "./Country";

//建立仲介者的抽象類別

/**
 * 聯合國機構的抽象類別
 */
export abstract class UnitedNations {
    abstract Send(message: string, country: Country): string;
}