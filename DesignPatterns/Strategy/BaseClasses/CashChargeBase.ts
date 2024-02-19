/**
 * 現金收費抽象類別
 */
export abstract class CashChargeBase {
  public abstract charge(amount: number): number;
}