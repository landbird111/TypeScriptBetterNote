/**
 * ==============================
 * 這是一個組合模式的範例
 * ==============================
 */

// 組合模式的特點:
//將物件組合成樹形結構以表示「部份－整體」的層次結構。
//組合模式使得用戶對單個物件和組合物件的使用具有一致性。

import { CreateCompany } from "./Classes/CreateCompany";
import { CreateTrainDepart } from "./Classes/CreateTrainDepart";
import { CreateCommonWorkDepart } from "./Classes/CreateCommonWorkDepart";

let rootCompany: CreateCompany = new CreateCompany("台北總公司");
rootCompany.Add(new CreateTrainDepart("人資部"));
rootCompany.Add(new CreateTrainDepart("專案部"));
rootCompany.Add(new CreateTrainDepart("業務部"));
rootCompany.Add(new CreateCommonWorkDepart("會計部"));
rootCompany.Add(new CreateCommonWorkDepart("總務部"));

let subCompany: CreateCompany = new CreateCompany("台中分公司");
subCompany.Add(new CreateTrainDepart("人資部"));
subCompany.Add(new CreateCommonWorkDepart("會計部"));
subCompany.Add(new CreateCommonWorkDepart("維修部"));

rootCompany.Add(subCompany);

// 輸出結果
console.log(rootCompany.Display(0));
console.log(rootCompany.CompanyDuty());

// 測試輸出結果
// node ..\dist\Composite\Main.js

// Output =>
// 主階層(第0層)==>台北總公司
// 子階層(第2層)==>人資部
// 子階層(第2層)==>專案部
// 子階層(第2層)==>業務部
// 子階層(第2層)==>會計部
// 子階層(第2層)==>總務部
// 主階層(第2層)==>台中分公司
// 子階層(第4層)==>人資部
// 子階層(第4層)==>會計部
// 子階層(第4層)==>維修部

// 台北總公司轄下部門的責任是 ==>
// 人資部的責任是培訓員工
// 專案部的責任是培訓員工
// 業務部的責任是培訓員工
// 會計部的責任是一般工作
// 總務部的責任是一般工作
// 台中分公司轄下部門的責任是 ==>
// 人資部的責任是培訓員工
// 會計部的責任是一般工作
// 維修部的責任是一般工作
