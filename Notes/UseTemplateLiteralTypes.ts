/**
 * ==========================
 * Template Literal Types
 * ==========================
 */

// 可以使用模板字符串类型来创建字符串字面量类型的联合类型
type Easing = "ease-in" | "ease-out" | "ease-in-out";
type EasingName = "ease" | `${Easing}-back`;

const easing: EasingName = "ease-in-back"; // OK
// const easing3: EasingName = "ease-in"; // Error: Type '"ease-in"' is not assignable to type 'EasingName'.
// const easeback: EasingName = "ease-back"; // Error: Type '"ease-back"' is not assignable to type 'EasingName'.
