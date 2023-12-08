/**
 * ==============================
 * 這個範例展示如何使用高級型別
 * ==============================
 */

// 建立一個新的型別，這個型別會將傳入的型別的所有屬性都變成 readonly
type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P];
};

// 定義一個介面，當做範例
interface Person {
    name: string;
    age: number;
}

// 將 Person 傳入 ReadonlyProps 這個型別
type ReadonlyPerson = ReadonlyProps<Person>;

// 就會讓person的所有屬性都變成 readonly，這樣就無法修改了
function useReadonlyPerson(person: ReadonlyPerson) {
    // person.name = 'Bob'; // Error: Cannot assign to 'name' because it is a read-only property.
}

// ==============================
