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
import TeamEdit from '../../components/team/edit/TeamEdit';
import TeamCreate from '../../components/team/create/TeamCreate';
import {GenericObject} from '../../models/GenericObject';
import {Response} from '../../models/Response';
import NotificationUtil from '../../utils/NotificationUtil';

function HomeContainer() {

    const dispatch = useAppDispatch();
    const selectedTeam = useAppSelector(state => state.team.selectedTeam);
    const [teams, setTeams] = useState(new Teams());
    const [conference, setConference] = useState('');
    const [division, setDivision] = useState('');
    const [search, setSearch] = useState('');
    const [rightSectionView, setRightSectionView] = useState('view-team');

    useEffect(() => {
        getTeams();
    }, [conference, division, search]);

    function renderRightSectionViewComponent(rightSectionView: string) {
        let component = null;

        switch (rightSectionView) {
            case 'create-team':
                component = <TeamCreate submit={submitAddedTeamInfo} cancel={cancelCreatingTeam}/>;
                break;
            case 'edit-team':
                component = <TeamEdit team={selectedTeam} submit={submitEditedTeamInfo} cancel={cancelEditingTeam}/>;
                break;
            default:
                component = <TeamInfo team={selectedTeam} edit={editTeam} delete={deleteTeam}/>;
        }

        return component;
    }

    function getTeams(page = 1): void {
        const params = {
            page,
            conference,
            division,
            search
        };

        TeamService.get(params).then((teams: Teams) => {
            setTeams(teams);
        });
    }

    function searchTeams(field: string, value: string): void {
        if (field === 'conference') {
            setConference(value);
        } else if (field === 'division') {
            setDivision(value);
        } else if (field === 'search') {
            setSearch(value);
        }
    }

    function selectTeam(team: Team): void {
        dispatch(action.team.selectTeam(team));
    }

    function createTeam(): void {
        setRightSectionView('create-team');
    }

    function cancelCreatingTeam(): void {
        setRightSectionView('view-team');
    }

    function submitAddedTeamInfo(payload: GenericObject): void {
        TeamService.create(payload)
            .then((team: Team) => {
                NotificationUtil.success('Team successfully created.');
                selectTeam(team);
                cancelCreatingTeam();
                getTeams(teams.meta.current_page);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
            });
    }

    function editTeam(team: Team): void {
        setRightSectionView('edit-team');
    }

    function cancelEditingTeam(): void {
        setRightSectionView('view-team');
    }

    function submitEditedTeamInfo(payload: GenericObject): void {
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

    function deleteTeam(id: number): void {
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
            <Row className="mt-5">
                <Col sm={8}>
                    <TeamList teams={teams} create={createTeam} search={searchTeams} select={selectTeam}/>
                </Col>
                <Col sm={4}>
                    {renderRightSectionViewComponent(rightSectionView)}
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default HomeContainer;
