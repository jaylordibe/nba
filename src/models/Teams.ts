import {PaginationLinks} from './PaginationLinks';
import {PaginationMeta} from './PaginationMeta';
import {Team} from './Team';

export class Teams {

    private _data: TeamsData;
    private _links: PaginationLinks;
    private _meta: PaginationMeta;

    constructor() {
        this._data = new TeamsData();
        this._links = new PaginationLinks();
        this._meta = new PaginationMeta();
    }

    get data(): TeamsData {
        return this._data;
    }

    set data(value: TeamsData) {
        this._data = value;
    }

    get links(): PaginationLinks {
        return this._links;
    }

    set links(value: PaginationLinks) {
        this._links = value;
    }

    get meta(): PaginationMeta {
        return this._meta;
    }

    set meta(value: PaginationMeta) {
        this._meta = value;
    }
}

export class TeamsData {

    private _teams: Team[];

    constructor() {
        this._teams = [] as Team[];
    }

    get teams(): Team[] {
        return this._teams;
    }

    set teams(value: Team[]) {
        this._teams = value;
    }
}
