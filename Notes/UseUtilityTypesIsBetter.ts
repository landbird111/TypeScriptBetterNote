/**
 * ==============================
 * 這個範例說明使用 Utility Types 來取代自己寫的類型，會更省力
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content
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
function updateProductBySenior(
    productId: IProduct["id"],
    updateProduct: Partial<Omit<IProduct, "id">>
): void {
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

// Nullable<T> 會將 T 變成 T | null
type Nullable<T> = { [P in keyof T]: T[P] | null };

interface IPerson {
    name: string;
    age: number;
    address: string;
}

const personSample: Nullable<IPerson> = {
    name: "John",
    age: 18,
    address: null,
};

// 其他的 Utility Types 還有
// Required<T> 會將 T 的所有屬性變成 required

// Pick<T, K> 會從 T 中挑選 K 的屬性，例如: Pick<IPerson, "name" | "age">
// Omit<T, K> 會從 T 中忽略 K 的屬性，例如: Omit<IPerson, "name" | "age">

// Exclude<T, U> 會從 T 中排除 U 的屬性，例如: Exclude<IPerson, "name" | "age">
// Extract<T, U> 會從 T 中提取 U 的屬性，例如: Extract<IPerson, "name" | "age">

// NonNullable<T> 會將 T 變成 T | null | undefined

// Parameters<T> 會從 T 的函式參數中提取出來
// ConstructorParameters<Type> 會從 Type 的建構子參數中提取出來
// ThisParameterType<Type> 會從 Type 的 this 參數中提取出來
// OmitThisParameter<Type> 會從 Type 的 this 參數中忽略出來
// ThisType<Type> 會從 Type 的 this 型別中提取出來

// ReturnType<T> 會從 T 的函式回傳值中提取出來
// InstanceType<Type> 會從 Type 的建構子回傳值中提取出來

// UpperCase<T> 會將 T 變成大寫
// LowerCase<T> 會將 T 變成小寫

// Capitalize<T> 會將 T 變成首字大寫
// Uncapitalize<T> 會將 T 變成首字小寫

// Awaited<Type> 會將 Type 變成 Promise 的回傳值


// Ref: https://www.typescriptlang.org/docs/handbook/utility-types.html#handbook-content