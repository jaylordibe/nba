import React, {useState} from 'react';
import './TeamInfo.css';
import {TeamInfoProps} from './TeamInfoProps';
import {Button, Card, OverlayTrigger, Popover, Spinner, Tooltip} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function TeamInfo(props: TeamInfoProps) {

    function getEditOverlay() {
        return (
            <Tooltip id="deleteTeamButton">Edit</Tooltip>
        );
    }

    function getDeleteOverlay() {
        return (
            <Popover id="popover-basic">
                <Popover.Title as="h3" className="text-center">Delete Confirmation</Popover.Title>
                <Popover.Content className="text-center">
                    Are you sure you want to delete this team?
                    <br/><br/>
                    {/*<Button variant="dark" size="sm">Cancel</Button>*/}
                    <Button onClick={() => props.delete(props.team.id)} variant="danger" size="sm" className="ml-2">
                        {
                            props.isLoading
                                ?
                                <Spinner animation="grow" size="sm"/>
                                :
                                'Delete'
                        }
                    </Button>
                </Popover.Content>
            </Popover>
        );
    }

    return (
        <React.Fragment>
            <Card>
                {
                    props.team.id
                        ?
                        <Card.Body>
                            <Card.Text className="text-right">
                                <OverlayTrigger placement="top" overlay={getEditOverlay}>
                                    <Button variant="dark" onClick={() => props.edit(props.team)}>
                                        <FontAwesomeIcon icon="pencil-alt" size="lg"/>
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger trigger="click" rootClose={true} placement="top" overlay={getDeleteOverlay()}>
                                    <Button variant="danger" className="ml-2">
                                        <FontAwesomeIcon icon="trash-alt" size="lg"/>
                                    </Button>
                                </OverlayTrigger>
                            </Card.Text>
                            <Card.Title>
                                <strong>{ props.team.name }</strong>
                            </Card.Title>
                            <Card.Text>
                                <strong>Conference:</strong>
                                <br/>
                                { props.team.conference }
                            </Card.Text>
                            <Card.Text>
                                <strong>Division:</strong>
                                <br/>
                                { props.team.division }
                            </Card.Text>
                        </Card.Body>
                        :
                        <Card.Body>
                            <Card.Text className="text-center">
                                Selected team info will be shown here
                            </Card.Text>
                        </Card.Body>
                }
            </Card>
        </React.Fragment>
    );
}

export default TeamInfo;
