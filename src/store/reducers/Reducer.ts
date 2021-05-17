import {combineReducers} from 'redux';
import teamReducer from './TeamReducer';

const reducer = combineReducers({
    team: teamReducer
});

export default reducer;
