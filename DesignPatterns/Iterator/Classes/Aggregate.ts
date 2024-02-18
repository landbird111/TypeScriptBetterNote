import { Iterator } from './Iterator';

/**
 * 聚合物件的抽象結構
 */
export abstract class Aggregate<T> {
    /**
     * 建立迭代器
     */
    abstract CreateIterator(): Iterator<T>;
}
