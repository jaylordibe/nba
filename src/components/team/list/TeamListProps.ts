import {Teams} from '../../../models/Teams';
import {Team} from '../../../models/Team';

export interface TeamListProps {
    teams: Teams;
    create(): void;
    search(field: string, value: string): void;
    select(team: Team): void;
}
