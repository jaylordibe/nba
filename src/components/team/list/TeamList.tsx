import React from 'react';
import './TeamList.css';
import {Button, Table} from 'react-bootstrap';
import {TeamListProps} from './TeamListProps';

function TeamList(props: TeamListProps) {

    return (
        <React.Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Conference</th>
                        <th>Division</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.teams.data.teams.map(team => {
                            return (
                                <tr key={ team.id }>
                                    <td>
                                        <Button variant="link" onClick={e => props.select(team)}>{ team.name }</Button>
                                    </td>
                                    <td>{ team.conference }</td>
                                    <td>{ team.division }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </React.Fragment>
    );
}

export default TeamList;
