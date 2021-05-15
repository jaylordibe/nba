import {BaseModel} from './BaseModel';

export class Team extends BaseModel {

    private _name: string;
    private _conference: string;
    private _division: string;

    constructor() {
        super();
        this._name = '';
        this._conference = '';
        this._division = '';
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get conference(): string {
        return this._conference;
    }

    set conference(value: string) {
        this._conference = value;
    }

    get division(): string {
        return this._division;
    }

    set division(value: string) {
        this._division = value;
    }
}
