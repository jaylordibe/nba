import {ActionType} from '../../constants/ActionType';
import {GenericObject} from '../../models/GenericObject';

const initialState = {
    selectedTeam: {}
};


const teamReducer = (state = initialState, action: GenericObject) => {
    let updatedState;

    switch (action.type) {
        case ActionType.SELECT_TEAM:
            updatedState = {
                ...state,
                selectedTeam: action.payload.team
            };
            break;
        default:
            updatedState = {...state};
    }

    return updatedState;
};

export default teamReducer;
