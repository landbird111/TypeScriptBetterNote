/**
 * ==========================
 * Template Literal Types with Conditional Types
 * ==========================
 */

// 拆解路徑參數，可以直接使用遞迴的方式來拆解

type ExtractRouteParams<T extends string> = T extends `/${infer Param}/${infer Rest}` ? { param: Param } & ExtractRouteParams<`/${Rest}`> : {};

type RouteParams = ExtractRouteParams<"/user/123/profile">;
// => { param: "user" } & { param: "123" } & { param: "profile" } & {}

type RouteParams2 = ExtractRouteParams<"/user/:id/profile/:proId">;
// => { param: ":id" } & { param: "profile" } & { param: ":proId" } & {}
