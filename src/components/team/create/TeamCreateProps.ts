import {GenericObject} from '../../../models/GenericObject';

export interface TeamCreateProps {
    submit(payload: GenericObject): void;
    cancel(): void;
    isLoading: boolean;
}
