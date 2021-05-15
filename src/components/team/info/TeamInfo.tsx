import React from 'react';
import './TeamInfo.css';
import {TeamInfoProps} from './TeamInfoProps';
import {Button, Card} from 'react-bootstrap';

function TeamInfo(props: TeamInfoProps) {

    return (
        <React.Fragment>
            <Card>
                {
                    props.team.id
                        ?
                        <Card.Body>
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
                            <Button variant="info" onClick={() => props.edit(props.team)}>Edit</Button>
                            <Button variant="danger" className="ml-2" onClick={() => props.delete(props.team.id)}>Delete</Button>
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
