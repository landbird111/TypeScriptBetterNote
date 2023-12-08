/**
 * ========================================
 * 這個範例主要是說明，使用 type enumerable 比 original enum 更好的原因
 * ========================================
 */

// 這是一個原始的enum
enum pureState {
    Success,
    InProgress,
    Failed,
}

// 使用enum的範例如下:
pureState.Success; // (enum member) State.Success = 0
pureState.InProgress; // (enum member) State.Inprogress = 1
pureState.Failed; // (enum member) State.Failed = 2

// 使用enum的方法，就會突顯出enum的缺點
const pureCheckState = (state: pureState) => {};

// 故意傳入一個不存在的狀態，在一些舊的版本中，可能會讓不存在的數字被使用，例如:
// pureCheckState(100); // "Unknown"

// 或是有些人直接用魔法數字，無法直覺的理解是什麼Enum被使用，例如:
pureCheckState(0); // "Success"

// ========================================

// 以下是定義type enumerable的方式
type TypeEnumState = "Success" | "InProgress" | "Failed";

const TypeEnumCheckState = (state: TypeEnumState) => {};

// 以下是使用此type enumerable的範例
// 可以發現，使用type enumerable的方式，可以避免使用者傳入不存在的狀態
TypeEnumCheckState("Success"); // OK
TypeEnumCheckState("InProgress"); // OK
TypeEnumCheckState("Failed"); // OK
// TypeEnumCheckState("Unknown"); // Error: Argument of type '"Unknown"' is not assignable to parameter of type 'TypeEnumState'.

// 即使大小寫不同，也會被視為不同的狀態
// TypeEnumCheckState("success"); // Error: Argument of type '"success"' is not assignable to parameter of type 'TypeEnumState'.

// ========================================

// 如果還是習慣使用enum的話，可以使用以下的方式
enum EnumStringState {
    Success = "Success",
    InProgress = "InProgress",
    Failed = "Failed",
}

// 以下是使用此enum的範例
const EnumStringCheckState = (state: EnumStringState) => {};

EnumStringCheckState(EnumStringState.Success); // OK
EnumStringCheckState(EnumStringState.InProgress); // OK
EnumStringCheckState(EnumStringState.Failed); // OK
// EnumStringCheckState("Unknown"); // Error: Argument of type '"Unknown"' is not assignable to parameter of type 'EnumStringState'.
// EnumStringCheckState(0); // Error: Argument of type '0' is not assignable to parameter of type 'EnumStringState'.
// EnumStringCheckState("Success"); // Error: Argument of type '"Success"' is not assignable to parameter of type 'EnumStringState'.