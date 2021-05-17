export class BaseModel {

    private _id: number;
    private _status: string;
    private _createdAt: number;
    private _updatedAt: number;

    constructor() {
        this._id = 0;
        this._status = '';
        this._createdAt = 0;
        this._updatedAt = 0;
    }

    public isEmpty(): boolean {
        return !(this !== undefined && this !== null && this._id !== 0);
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get createdAt(): number {
        return this._createdAt;
    }

    set createdAt(value: number) {
        this._createdAt = value;
    }

    get updatedAt(): number {
        return this._updatedAt;
    }

    set updatedAt(value: number) {
        this._updatedAt = value;
    }
}
