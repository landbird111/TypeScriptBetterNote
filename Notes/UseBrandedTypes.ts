/**
 * =============================================================================
 * Use Branded Types
 * =============================================================================
 */

// 增強型別安全性: Branded Type 可以幫助 TypeScript 更好地區分不同類型的值，即使它們的底層型別相同。
// 例如，你可能有一個 UserId 型別和一個 ProductId 型別，它們都是 string，但 Branded Type 可以確保它們不會被混淆使用。

// Branded Type 是 TypeScript 提供的一種強大的型別系統機制，可以幫助您寫出更安全、更可靠的程式碼。
// 通過為原始型別添加額外的"標籤"，您可以更好地表達型別的意圖，並避免一些常見的錯誤。

// 注意: 運行時無效 => Branded Type 僅在編譯時有效，在運行時這些額外的標籤並不會存在。

type UserId = string & { _brand: "UserId" };
function createUserId(id: string): UserId {
    return id as UserId;
}

type ProductId = string;
function createProductId(id: string): ProductId {
    return id;
}

type ConsumeId = string;
function createConsumeId(id: string): ConsumeId {
    return id;
}

const userId = createUserId("1234");
const productId = createProductId("1234");
const consumeId = createConsumeId("1234");

if (userId === productId) {
    // Error: This condition will always return 'false' since the types 'UserId' and 'ProductId' have no overlap.
}

if (productId === consumeId) {
    // No Error
}

// 第二種方法是使用唯一符號，這樣可以確保我們不會意外地將兩個不同的 UUID 混淆在一起。
type UUID = string & { readonly _brand: unique symbol };

function generateUUID(): UUID {
    // ... 生成 UUID 的邏輯
    return "xxxxxxxx-xxxx-4xxx-xxxx-xxxxxxxxxxxx" as UUID;
}

const myUUID = generateUUID();
const yourUUID = generateUUID();
// myUUID: UUID // 確保 myUUID 一定是 UUID 型別
if (myUUID === yourUUID) {
    // Error: This condition will always return 'false' since the types 'UUID' and 'UUID' have no overlap.
}

// 第三種方法是將數字標記為特定的貨幣，例如台幣。
type NewTaiwanDollar = number & { readonly _brand: "TWN" };

function calculateTotal(price: NewTaiwanDollar, quantity: number): NewTaiwanDollar {
    return (price * quantity) as NewTaiwanDollar;
}

const price: NewTaiwanDollar = 300 as NewTaiwanDollar;
const total = calculateTotal(price, 2);
