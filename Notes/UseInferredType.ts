/**
 * ==========================
 * Use Inferred Type
 * ==========================
 */

// 利用「推斷(infer)」來提取和使用條件類型中的類型。
type ReturnInferredType<T> = T extends (...args: any[]) => infer R ? R : any;
type ReturnFn = () => string;
type ReturnTypeOfFn = ReturnInferredType<ReturnFn>; // string
