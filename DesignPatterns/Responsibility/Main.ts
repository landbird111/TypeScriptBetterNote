/**
 * ==============================
 * 這是一個職責鏈模式的範例
 * ==============================
 */

// 職責鏈模式的特點
// 使多個物件都有機會處理請求，從而避免請求的發送者[像是員工填寫申請單欲申請something時]和
// 接收者[像是接收單子的長官或部門之類的]之間的耦合關係。
// 將這些物件連成一條鏈，並沿著這條鏈傳遞該請求，直到有一個物件處理它為止。
// (註:設計不良時，會造成無盡迴圈的情況，需小心使用)

import { CommonManager } from "./Classes/CommonManager";
import { GeneralManager } from "./Classes/GeneralManager";
import { ViceGeneralManager } from "./Classes/ViceGeneralManager";
import { OrderRequest } from "./Classes/OrderRequest";

// 建立經理們的實體
let commonManager: CommonManager = new CommonManager("林一般經理");
let viceGeneralManager: ViceGeneralManager = new ViceGeneralManager("王副大副總經理");
let generalManager: GeneralManager = new GeneralManager("李總是總經理");

// 設定職責鏈的後續處理者
commonManager.setSuperior(viceGeneralManager);
viceGeneralManager.setSuperior(generalManager);

// 建立請求
let orderRequest: OrderRequest = new OrderRequest();
orderRequest.orderRequestType = "請假";
orderRequest.orderRequestContent = "小菜今天很帥，想請假";
//依據條件，設定請求處理的等級，例如: 病假(2)給一般經理，事假(4)給副總經理，特休(6)給總經理
orderRequest.orderRequestLevel = 2;

// 送出請求，這邊只要交給職責鏈的第一個物件就好
console.log(commonManager.handleOrderRequest(orderRequest));

// 測試輸出結果
// node ..\dist\Responsibility\Main.js

// Output =>
// 設定為orderRequestLevel為2時，輸出結果為:
// 林一般經理批准(請假級別: 2): 小菜今天很帥，想請假
// 設定為orderRequestLevel為4時，輸出結果為:
// 王副大副總經理批准(請假級別: 4): 小菜今天很帥，想請假
// 設定為orderRequestLevel為6時，輸出結果為:
// 李總是總經理批准(請假級別: 6): 小菜今天很帥，想請假
