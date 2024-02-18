/**
 * ==============================
 * 這是一個原型模式的範例
 * ==============================
 */

// 原型模式的特點:
// 用原型實例指定建立物件的種類，並且透過拷貝這些原型建立新的物件

import { PrototypeWithMe } from "./Classes/prototypeWithMe";

let prototypeWithMe = new PrototypeWithMe();
let clonedNewPrototype = prototypeWithMe.clone();

console.log(clonedNewPrototype instanceof PrototypeWithMe); 
console.log(clonedNewPrototype === prototypeWithMe); 
console.log(clonedNewPrototype.sayHello === prototypeWithMe.sayHello); 

prototypeWithMe.sayHello(); 
clonedNewPrototype.sayHello(); 

// ==============================================

import { PersonalResume } from "./Classes/PersonalResume";

let bigBirdResume = new PersonalResume("Big Bird");
bigBirdResume.setPersonalInfo("Man", 30);
bigBirdResume.setWorkExperience("1999-2006", "Google");

let smallBirdResume = bigBirdResume.clone();
smallBirdResume.setPersonalInfo("Female", 25);
smallBirdResume.setWorkExperience("2006-2010", "Microsoft");

bigBirdResume.display();
smallBirdResume.display();

// 測試輸出結果
// node ..\dist\Prototype\Main.js

// Output =>
// true
// false
// true
// Hello, I'm a prototype with me!
// Hello, I'm a prototype with me!

// name: Big Bird, sex: Man, age: 30
// work experience: 1999-2006, Google
// name: Big Bird, sex: Female, age: 25
// work experience: 2006-2010, Microsoft