/**
 * 迭代器的基本抽象結構
 */
export abstract class Iterator<T> {
    /** 取得第一個項目 */
    abstract First(): T | null;

    /** 取得下一個項目 */
    abstract Next(): T | null;

    /** 取得是否完成 */
    abstract IsDone(): boolean;

    /** 取得目前項目 */
    abstract CurrentItem(): T | null;
}
