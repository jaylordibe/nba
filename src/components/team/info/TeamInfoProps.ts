import {Team} from '../../../models/Team';

export interface TeamInfoProps {
    team: Team;
    edit(team: Team): void;
    delete(id: number): void;
    isLoading: boolean;
}
