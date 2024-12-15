/**
 * =======================================
 * Microservices (微服務架構)
 * =======================================
 */

// 概述：
// 微服務是一種架構模式，它將大型應用程式分解成獨立的小型服務。
// 每個微服務都有自己的資料庫和應用程式接口，可以獨立開發、部署和擴展。

// 何時使用：
// 1. 具有不同功能領域的大型應用程序，可從獨立擴展和部署中獲益。
// 2. 具有不同服務的項目，需要獨立的資料庫、業務邏輯或應用程式介面。

public class AccountDbContext {
    public DbSet<Account> Accounts { get; set; }
}

public class AccountService {
    private readonly _context: AccountDbContext;

    constructor(context: AccountDbContext) {
        this._context = context;
    }

    public GetAccount(id: number): Account {
        return this._context.Accounts.Find(id);
    }

    public AddAccount(account: Account): void {
        this._context.Accounts.Add(account);
        this._context.SaveChanges();
    }
}