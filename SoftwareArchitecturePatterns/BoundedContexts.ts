/**
 * ==========================================
 * Bounded Contexts (有界上下文)
 * ==========================================
 */

// 概述：
// 有界脈絡是領域驅動設計（DDD）中的基本概念。
// 它們圍繞著業務領域的不同區域定義了清晰的邊界，有助於組織大型應用程式。
// 每個上下文都封裝了自己的資料集、術語和業務規則，從而避免了衝突並降低了複雜性。

// 何時使用：
// 1. 需要隔離的多個不同區域的複雜領域。
// 2. 不同部件可能需要隨時間獨立發展的應用。
// 3. 可以包含自己的數據模型、業務邏輯和服務，確保依賴性最小化。
// 4. 如同一個個小型的模組，可以獨立開發、測試和部署，也會容易遷移至其他專案。

public class AccountContext {

    public class Account {
        AccountId: number;
        Balance: number;
        AccountType: string;
    }

    public class Transaction {
        TransactionId: number;
        AccountId: number;
        Amount: number;
        TransactionDate: Date;
    }

    public class AccountService {
        public Deposit(account: Account, amount: number): void {
            // Deposit logic
            account.Balance += amount;
        }

        public Withdraw(account: Account, amount: number): void {
            // Withdraw logic
            account.Balance -= amount;
        }
    }
}