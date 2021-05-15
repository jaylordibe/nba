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
                            <Card.Title>{ props.team.name }</Card.Title>
                            <Card.Text>
                                { props.team.conference }
                            </Card.Text>
                            <Card.Text>
                                { props.team.division }
                            </Card.Text>
                            <Button variant="info">Edit</Button>
                            <Button variant="danger" className="ml-2">Delete</Button>
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
