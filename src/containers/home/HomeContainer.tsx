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
import TeamEditForm from '../../components/team/edit-form/TeamEditForm';
import {GenericObject} from '../../models/GenericObject';
import {Response} from '../../models/Response';
import NotificationUtil from '../../utils/NotificationUtil';

function HomeContainer() {

    const dispatch = useAppDispatch();
    const selectedTeam = useAppSelector(state => state.team.selectedTeam);
    const [teams, setTeams] = useState(new Teams());
    const [isEditingTeam, setIsEditingTeam] = useState(false);

    useEffect(() => {
        getTeams();
    }, []);

    function getTeams(page = 1) {
        const params = {
            page
        };

        TeamService.get(params).then((teams: Teams) => {
            setTeams(teams);
        });
    }

    function selectTeam(team: Team) {
        dispatch(action.team.selectTeam(team));
    }

    function editTeam(team: Team) {
        setIsEditingTeam(true);
    }

    function submitEditedTeamInfo(payload: GenericObject) {
        TeamService.update(payload.id, payload)
            .then((team: Team) => {
                NotificationUtil.success('Team info successfully updated.');
                selectTeam(team);
                cancelEditingTeam();
                getTeams(teams.meta.current_page);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
            });
    }

    function cancelEditingTeam() {
        setIsEditingTeam(false);
    }

    function deleteTeam(id: number) {
        TeamService.delete(id)
            .then((response: Response) => {
                NotificationUtil.success(response.success);
                selectTeam(new Team());
                getTeams(teams.meta.current_page);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
            });
    }

    return (
        <React.Fragment>
            <Row className="mt-3">
                <Col sm={8}>
                    <TeamList teams={teams} select={selectTeam}/>
                </Col>
                <Col sm={4}>
                    {
                        isEditingTeam
                            ?
                            <TeamEditForm team={selectedTeam} submit={submitEditedTeamInfo} cancel={cancelEditingTeam}/>
                            :
                            <TeamInfo team={selectedTeam} edit={editTeam} delete={deleteTeam}/>
                    }
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HomeContainer;
