import {Teams} from '../../../models/Teams';
import {Team} from '../../../models/Team';
import {GenericObject} from '../../../models/GenericObject';

export interface TeamListProps {
    teams: Teams;
    create(): void;
    search(params: GenericObject): void;
    select(team: Team): void;
}
