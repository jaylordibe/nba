import {Team} from '../../../models/Team';
import {GenericObject} from '../../../models/GenericObject';

export interface TeamEditFormProps {
    team: Team;
    submit(payload: GenericObject): void;
    cancel(): void;
}
