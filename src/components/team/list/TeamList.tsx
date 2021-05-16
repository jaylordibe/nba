import React, {useState} from 'react';
import './TeamList.css';
import {Button, Col, Form, Row, Table} from 'react-bootstrap';
import {TeamListProps} from './TeamListProps';
import {GenericObject} from '../../../models/GenericObject';
import {Conference} from '../../../constants/Conference';
import {Division} from '../../../constants/Division';
import TeamUtil from '../../../utils/TeamUtil';

function TeamList(props: TeamListProps) {

    const [conferences, setConferences] = useState(Object.values(Conference));
    const [divisions, setDivisions] = useState(Object.values(Division));
    const [conference, setConference] = useState('');
    const [division, setDivision] = useState('');
    const [search, setSearch] = useState('');

    function selectConference(conference: string): void {
        setConference(conference);
        const filteredDivisions = TeamUtil.findDivisionsByConference(conference);
        setDivisions(filteredDivisions);
        console.log({conference});
        props.search('conference', conference);
    }

    function selectDivision(division: string): void {
        setDivision(division);
        console.log({division});
        props.search('division', division);
    }

    function searchOnEnter(event: GenericObject) {
        setTimeout(() => {
            if (event.code === 'Enter' && event.target.value) {
                props.search('search', event.target.value);
            }
        });
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={3} className="text-right">
                    <Button type="button" onClick={() => props.create()} variant="dark">New Team</Button>
                </Col>
                <Col sm={3}>
                    <Form.Control as="select" value={conference} onChange={(e) => selectConference(e.target.value)}>
                        <option value="">Conference</option>
                        {
                            conferences.map(conference => <option key={conference} value={conference}>{ conference }</option>)
                        }
                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Form.Control as="select" value={division} onChange={(e) => selectDivision(e.target.value)}>
                        <option value="">Division</option>
                        {
                            divisions.map(division => <option key={division} value={division}>{ division }</option>)
                        }
                    </Form.Control>
                </Col>
                <Col sm={3}>
                    <Form.Control onKeyPress={searchOnEnter} placeholder="Search"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12}>
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
                                            <a onClick={() => props.select(team)}>{ team.name }</a>
                                        </td>
                                        <td>{ team.conference }</td>
                                        <td>{ team.division }</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default TeamList;
