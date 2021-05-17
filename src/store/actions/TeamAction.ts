import {GenericObject} from '../../models/GenericObject';
import {ActionType} from '../../constants/ActionType';

const selectTeam = (team: GenericObject) => ({
    type: ActionType.SELECT_TEAM,
    payload: {
        team
    }
});

const teamAction = {
    selectTeam
};

export default teamAction;
