import {Teams} from '../../../models/Teams';
import {Team} from '../../../models/Team';

export interface TeamListProps {
    teams: Teams;
    select(team: Team): void;
}
