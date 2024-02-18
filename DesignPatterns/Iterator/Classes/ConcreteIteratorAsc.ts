import { Iterator } from "./Iterator";
import { ConcreteAggregate } from "./ConcreteAggregate";

/**
 * 迭代器的實作(正向)
 */
export class ConcreteIteratorAsc<T> extends Iterator<T> {
    private _aggregate: ConcreteAggregate<T>;
    private _current: number = 0;

    constructor(aggregate: ConcreteAggregate<T>) {
        super();
        this._aggregate = aggregate;
    }

    First(): T | null {
        return this._aggregate.GetItem(0);
    }

    Next(): T | null {
        this._current++;
        if (this._current < this._aggregate.Count()) {
            return this._aggregate.GetItem(this._current);
        }
        return null;
    }

    IsDone(): boolean {
        return this._current >= this._aggregate.Count();
    }

    CurrentItem(): T | null {
        return this._aggregate.GetItem(this._current);
    }
}
