import { ManagerParameter } from "./ManagerParameter";

export class Singleton {
    private static instance: Singleton;
    private managerParameter!: ManagerParameter;

    private constructor() {
        this.initializeMe();
    }

    private initializeMe(): void {
        this.managerParameter = new ManagerParameter("張三", "資訊部", 30);
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public getManagerParameter(): ManagerParameter {
        return this.managerParameter;
    }
}
