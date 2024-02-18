import { Iterator } from "./Iterator";
import { ConcreteAggregate } from "./ConcreteAggregate";

/**
 * 迭代器的實作(反向)
 */
export class ConcreteIteratorDesc<T> extends Iterator<T> {
    private _aggregate: ConcreteAggregate<T>;
    private _current: number = 0;

    constructor(aggregate: ConcreteAggregate<T>) {
        super();
        this._aggregate = aggregate;

        this._current = this._aggregate.Count() - 1;
    }

    First(): T | null {
        return this._aggregate.GetItem(this._aggregate.Count() - 1);
    }

    Next(): T | null {
        this._current--;
        if (this._current >= 0) {
            return this._aggregate.GetItem(this._current);
        }
        return null;
    }

    IsDone(): boolean {
        return this._current < 0;
    }

    CurrentItem(): T | null {
        return this._aggregate.GetItem(this._current);
    }
}
