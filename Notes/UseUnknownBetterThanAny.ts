/**
 * ========================================
 * 這個範例主要是說明，如果不知道要使用什麼型別的話，建議使用unknown
 * ========================================
 */

// 這樣會避開typescript的型別檢查，不建議使用
let userAny: any;
// 如果真的不知道要使用什麼型別，建議使用unknown
let userUnknown: unknown;

// 解釋 => unknown是一個安全的any，因為它不會讓你隨意使用
// 以下是一個很好的例子
// userAny.name = 'John'; // OK
// userUnknown.name = 'John'; // Error: Property 'name' does not exist on type 'unknown'.

// 但是如果你真的要使用unknown的話，可以使用type assertion
// 舉例來說:
interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
}

interface IAdminUser extends IUser {
    token: string;
    addNewUser: () => void;
}

/**
 * 判斷是否為管理者物件資料
 * @param user 使用者物件
 * @returns
 */
function isAdminUser(user: unknown): user is IAdminUser {
    // 檢查user的型別是否為JSON物件
    if (user !== null && typeof user === "object") {
        // 檢查user是否有token屬性
        return "token" in user;
    }
    return false;
}

/**
 * 判斷是否為一般使用者物件資料
 * @param user 使用者物件
 * @returns
 */
function isRegularUser(user: unknown): user is IUser {
    // 檢查user的型別是否為JSON物件
    if (user !== null && typeof user === "object") {
        // 檢查user是否有token屬性
        return "token"! in user;
    }

    return false;
}

/**
 * 取得使用者資料
 */
async function fetchAdminUser() {
    const response = await fetch("https://dummyjson.com/users/1");

    // 一般常見的寫法，因為不知道會回傳什麼型別，所以使用any
    const badUsersResponse: any = await response.json();
    badUsersResponse.AddNewUser(); //即使打錯了，typescript也不會檢查出來，也沒有提示

    // ================================

    // 建議使用的方式是，使用unknown
    const goodUsersResponse: unknown = await response.json();

    if (isAdminUser(goodUsersResponse)) {
        // 因為isAdminUser已經確認過goodUsersResponse是IAdminUser，所以可以直接使用，也有提示可用
        goodUsersResponse.token = "...";
        goodUsersResponse.addNewUser();
    } else {
        console.log("goodUsersResponse is not admin user");
    }

    if (isRegularUser(goodUsersResponse)) {
        // 因為isRegularUser已經確認過goodUsersResponse是IUser，所以可以直接使用，也有提示可用
        goodUsersResponse.age = 18;
        // goodUsersResponse.addNewUser(); // 這裡會有錯誤提示，也不會有提示
    } else {
        console.log("goodUsersResponse is not regular user");
    }
}
