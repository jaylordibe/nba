import React, {useState} from 'react';
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
    const [rightSectionView, setRightSectionView] = useState('view-team');
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [isUpdatingTeam, setIsUpdatingTeam] = useState(false);
    const [isDeletingTeam, setIsDeletingTeam] = useState(false);
    const [params, setParams] = useState({});

    function renderRightSectionViewComponent(rightSectionView: string) {
        let component = null;

        switch (rightSectionView) {
            case 'create-team':
                component = <TeamCreate submit={submitAddedTeamInfo} cancel={cancelCreatingTeam} isLoading={isCreatingTeam}/>;
                break;
            case 'edit-team':
                component = <TeamEdit team={selectedTeam} submit={submitEditedTeamInfo} cancel={cancelEditingTeam} isLoading={isUpdatingTeam}/>;
                break;
            default:
                component = <TeamInfo team={selectedTeam} edit={editTeam} delete={deleteTeam} isLoading={isDeletingTeam}/>;
        }

        return component;
    }

    function searchTeams(params = {}): void {
        setParams(params);
        TeamService.get(params).then((teams: Teams) => {
            setTeams(teams);
        });
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
        setIsCreatingTeam(true);
        TeamService.create(payload)
            .then((team: Team) => {
                NotificationUtil.success('Team successfully created.');
                selectTeam(team);
                cancelCreatingTeam();
                setIsCreatingTeam(false);

                const filter: GenericObject = params;
                filter.page = teams.meta.current_page;
                searchTeams(filter);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
                setIsCreatingTeam(false);
            });
    }

    function editTeam(team: Team): void {
        setRightSectionView('edit-team');
    }

    function cancelEditingTeam(): void {
        setRightSectionView('view-team');
    }

    function submitEditedTeamInfo(payload: GenericObject): void {
        setIsUpdatingTeam(true);
        TeamService.update(payload.id, payload)
            .then((team: Team) => {
                NotificationUtil.success('Team info successfully updated.');
                selectTeam(team);
                cancelEditingTeam();
                setIsUpdatingTeam(false);

                const filter: GenericObject = params;
                filter.page = teams.meta.current_page;
                searchTeams(filter);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
                setIsUpdatingTeam(false);
            });
    }

    function deleteTeam(id: number): void {
        setIsDeletingTeam(true);
        TeamService.delete(id)
            .then((response: Response) => {
                NotificationUtil.success(response.success);
                selectTeam(teams.data.teams[0]);
                setIsDeletingTeam(false);
                setRightSectionView('view-team');

                const filter: GenericObject = params;
                filter.page = teams.meta.current_page;
                searchTeams(filter);
            })
            .catch((error) => {
                NotificationUtil.error(error.response.data.error);
                setIsDeletingTeam(false);
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
