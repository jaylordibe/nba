export class PaginationMeta {

    private _current_page: number;
    private _from: number;
    private _last_page: number;
    private _links: PaginationMetaLinks[];
    private _path: string;
    private _per_page: number;
    private _to: number;
    private _total: number;

    constructor() {
        this._current_page = 1;
        this._from = 1;
        this._last_page = 1;
        this._links = [] as PaginationMetaLinks[];
        this._path = '';
        this._per_page = 10;
        this._to = 1;
        this._total = 1;
    }

    get current_page(): number {
        return this._current_page;
    }

    set current_page(value: number) {
        this._current_page = value;
    }

    get from(): number {
        return this._from;
    }

    set from(value: number) {
        this._from = value;
    }

    get last_page(): number {
        return this._last_page;
    }

    set last_page(value: number) {
        this._last_page = value;
    }

    get links(): PaginationMetaLinks[] {
        return this._links;
    }

    set links(value: PaginationMetaLinks[]) {
        this._links = value;
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }

    get per_page(): number {
        return this._per_page;
    }

    set per_page(value: number) {
        this._per_page = value;
    }

    get to(): number {
        return this._to;
    }

    set to(value: number) {
        this._to = value;
    }

    get total(): number {
        return this._total;
    }

    set total(value: number) {
        this._total = value;
    }
}

export class PaginationMetaLinks {

    private _active: boolean;
    private _label: string;
    private _url: string;

    constructor() {
        this._active = false;
        this._label = '';
        this._url = '';
    }

    get active(): boolean {
        return this._active;
    }

    set active(value: boolean) {
        this._active = value;
    }

    get label(): string {
        return this._label;
    }

    set label(value: string) {
        this._label = value;
    }

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }
}
