/**
 * ==============================
 * 這是一個狀態模式的範例
 * ==============================
 */

// 狀態模式的特點:
// 當一個物件的內在狀態改變時允許改變其行為，這個物件看起來像是改變了其類別
// 外部是不知道內部的狀態改變了，只知道物件的行為改變了(重點)

// 狀態模式透過把各種狀態轉移邏輯分佈到State的子類別之間,來減少相互間的依賴
// 當一個物件的行為取決於它的狀態,而且必須在執行時刻根據狀態改變它的行為時,就可以考慮使用狀態模式了

import { WorkProgram } from "./Classes/WorkProgram";
const emergencyProjects: WorkProgram = new WorkProgram();
emergencyProjects.WorkHour = 9;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 10;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 12;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 13;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 14;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 17;
emergencyProjects.WriteProgram()
emergencyProjects.WorkIsFinished = false;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 19;
emergencyProjects.WriteProgram()
emergencyProjects.WorkHour = 22;
emergencyProjects.WriteProgram()

// 測試輸出結果
// node dist/States/Main.js

// Output =>
// 目前時間是: 9點。 努力工作!
// 目前時間是: 10點。 努力工作!
// 目前時間是: 12點。 Lunch time!
// 目前時間是: 13點. 下午工作開始!
// 目前時間是: 14點. 下午工作開始!
// 目前時間是: 17點. 加班工作!
// 目前時間是: 17點. 加班工作!
// 目前時間是: 19點. 加班工作!
// 目前時間是: 22點. 睡眠中...