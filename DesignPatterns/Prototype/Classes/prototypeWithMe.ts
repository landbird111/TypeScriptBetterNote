export class PrototypeWithMe {
    sayHello(): void {
        console.log("Hello, I'm a prototype with me!");
    }

    /**
     * 關鍵的複製方法
     * @returns 複製後的自己
     */
    public clone(): PrototypeWithMe {
        let firstTypeClone = Object.create(PrototypeWithMe.prototype || null);
        return firstTypeClone;
    }
}
