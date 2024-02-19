import { Aggregate } from "../BaseClasses/Aggregate";
import { Iterator } from "./Iterator";
import { ConcreteIteratorAsc } from "./ConcreteIteratorAsc";
import { IConcreteAggregate } from "../Interfaces/IConcreteAggregate";

/**
 * 實作聚合物件的存取介面
 */
export class ConcreteAggregate<T> extends Aggregate<T> implements IConcreteAggregate<T> {
    private _items: T[] = [];

    Count(): number {
        return this._items.length;
    }

    GetItem(index: number): T | null {
        if (this._items.indexOf(index as T) === -1) {
            return null;
        }
        return this._items[index];
    }

    SetItem(index: number, value: T): void {
        this._items[index] = value;
    }

    CreateIterator(): Iterator<T> {
        return new ConcreteIteratorAsc<T>(this);
    }
}
