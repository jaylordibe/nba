import React from 'react';
import './TeamList.css';
import {Table} from 'react-bootstrap';
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
                                    <td>{ team.name }</td>
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
