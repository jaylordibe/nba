import React, {useEffect, useState} from 'react';
import './HomeContainer.css';
import {Teams} from '../../models/Teams';
import TeamService from '../../services/TeamService';
import TeamList from '../../components/team/list/TeamList';
import {Col, Row} from 'react-bootstrap';
import TeamInfo from '../../components/team/info/TeamInfo';

function HomeContainer() {

    const [teams, setTeams] = useState(new Teams());

    useEffect(() => {
        getTeams();
    }, []);

    function getTeams() {
        TeamService.get().then((teams: Teams) => {
            setTeams(teams);
        });
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={8}>
                    <TeamList teams={teams}/>
                </Col>
                <Col sm={4}>
                    {/*<TeamInfo team={team}/>*/}
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HomeContainer;
