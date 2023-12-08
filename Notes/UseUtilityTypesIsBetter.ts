/**
 * ==============================
 * 這個範例說明使用 Utility Types 來取代自己寫的類型，會更省力
 * ==============================
 */

// Partial<T> 會將 T 的所有屬性變成 optional

// 例如: 定義一個介面 IProduct
interface IProduct {
    id: number;
    title: string;
    name: string;
    price: number;
    rating: number;
}

// 一般工程師，若需要建立一個更新商品的介面，可能會這樣寫
interface IUpdateProduct {
    title?: string;
    name?: string;
    price?: number;
    rating?: number;
}

// 但是這樣寫的話，每次 IProduct 有變動時，IUpdateProduct 也要跟著變動
function updateProductByJunior(productId: IProduct["id"], updateProduct: IUpdateProduct): void {
    // ...
}

// 但是使用 Partial<T> 會更方便
// Omit是忽略某個屬性
function updateProductBySenior(productId: IProduct["id"], updateProduct: Partial<Omit<IProduct, "id">>): void {
    // ...
}

// 結論: 這樣只要 IProduct 有變動，updateProductBySenior 就不用變動了

// ==============================

// Record<K, T> 會將 K 的所有屬性變成 T 型別

type Properties = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

// 這樣定義顏色的話，就可以避免每次都要寫一堆類似的程式碼，例如: [255, 0, 0] 或是 "red"
const colors: Record<Properties, RGB | string> = {
    red: [255, 0, 0],
    green: "green",
    blue: [0, 0, 255],
    // yellow: [255, 255, 0], // yellow 不是 Properties 的屬性，所以會報錯
};

// 呼叫也有提示，避免打錯字
colors.red; // [255, 0, 0]
colors.green; // "green"
colors.blue; // [0, 0, 255]
// colors.yellow; // Error: Property 'yellow' does not exist on type 'Record<Properties, RGB | string>'.

// ==============================

// 未完待續...