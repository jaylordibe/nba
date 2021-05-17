export class PaginationLinks {

    private _first: string;
    private _last: string;
    private _next: string;
    private _prev: string;

    constructor() {
        this._first = '';
        this._last = '';
        this._next = '';
        this._prev = '';
    }

    get first(): string {
        return this._first;
    }

    set first(value: string) {
        this._first = value;
    }

    get last(): string {
        return this._last;
    }

    set last(value: string) {
        this._last = value;
    }

    get next(): string {
        return this._next;
    }

    set next(value: string) {
        this._next = value;
    }

    get prev(): string {
        return this._prev;
    }

    set prev(value: string) {
        this._prev = value;
    }
}
