import {GenericObject} from './GenericObject';

export class Response {

    private _success: string;
    private _error: string;
    private _data: GenericObject;

    constructor() {
        this._success = '';
        this._error = '';
        this._data = {};
    }

    get success(): string {
        return this._success;
    }

    set success(value: string) {
        this._success = value;
    }

    get error(): string {
        return this._error;
    }

    set error(value: string) {
        this._error = value;
    }

    get data(): GenericObject {
        return this._data;
    }

    set data(value: GenericObject) {
        this._data = value;
    }
}
