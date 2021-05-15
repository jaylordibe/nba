import React, {useEffect, useState} from 'react';
import './HomeContainer.css';
import {Teams} from '../../models/Teams';
import TeamService from '../../services/TeamService';
import TeamList from '../../components/team/list/TeamList';
import {Col, Row} from 'react-bootstrap';
import TeamInfo from '../../components/team/info/TeamInfo';
import {Team} from '../../models/Team';
import {useAppDispatch, useAppSelector} from '../../store/Hooks';
import action from '../../store/actions/Action';

function HomeContainer() {

    const dispatch = useAppDispatch();
    const selectedTeam = useAppSelector(state => state.team.selectedTeam);
    const [teams, setTeams] = useState(new Teams());

    useEffect(() => {
        getTeams();
    }, []);

    function getTeams() {
        TeamService.get().then((teams: Teams) => {
            setTeams(teams);
        });
    }

    function selectTeam(team: Team) {
        dispatch(action.team.selectTeam(team));
    }

    return (
        <React.Fragment>
            <Row className="mt-3">
                <Col sm={8}>
                    <TeamList teams={teams} select={selectTeam}/>
                </Col>
                <Col sm={4}>
                    <TeamInfo team={selectedTeam}/>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HomeContainer;
