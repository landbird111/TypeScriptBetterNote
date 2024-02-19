/**
 * ==============================
 * 這是一個享元模式的範例
 * ==============================
 */

// 享元模式的特點:
// 運用"共用技術",有效地支援大量細粒度的物件.

//享元模式可以避免大量非常相似類別的消耗.
//在程式設計中,有時需要產生大量細粒度的類別實體來表示資料.

import { UserSample } from "./Classes/UserSample";
import { WebSiteCenter } from "./BaseClasses/WebSiteCenter";
import { WebSiteFactory } from "./Classes/WebSiteFactory";

// 建立一個工廠
const factory: WebSiteFactory = new WebSiteFactory();

// 建立一個部落格網站
const blog: WebSiteCenter = factory.GetWebSiteCategory("部落格");
// 建立一個部落格網站的使用者
const blogString = blog.Use(new UserSample("小明"));

// 建立一個商業網站
const business: WebSiteCenter = factory.GetWebSiteCategory("商業網站");
// 建立一個商業網站的使用者
const businessString = business.Use(new UserSample("小華"));

// 輸出結果
console.log(blogString);
console.log(businessString);
console.log(`網站數量: ${factory.GetWebSiteCount()}`);

// 測試輸出結果
// node dist/FlyWeight/Main.js

// Output =>
// 網站分類: 部落格 用戶: 小明
// 網站分類: 商業網站 用戶: 小華
// 網站數量: 2
