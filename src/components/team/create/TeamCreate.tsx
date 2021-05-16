import React, {FormEvent, useState} from 'react';
import './TeamCreate.css';
import {TeamCreateProps} from './TeamCreateProps';
import {Button, Col, Form} from 'react-bootstrap';
import {Conference} from '../../../constants/Conference';
import {Division} from '../../../constants/Division';
import TeamUtil from '../../../utils/TeamUtil';

function TeamCreate(props: TeamCreateProps) {

    const [conferences, setConferences] = useState(Object.values(Conference));
    const [divisions, setDivisions] = useState(Object.values(Division));
    const [name, setName] = useState('');
    const [conference, setConference] = useState('');
    const [division, setDivision] = useState('');

    function selectConference(conference: string): void {
        setConference(conference);
        const filteredDivisions = TeamUtil.findDivisionsByConference(conference);
        setDivisions(filteredDivisions);
    }

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const payload = {
            name,
            conference,
            division
        };

        props.submit(payload);
    }

    return (
        <React.Fragment>
            <Form onSubmit={(e) => submit(e)} className="shadow p-5">
                <h5 className="text-center">Create A New Team</h5>

                <Form.Group controlId="name">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="conference">
                    <Form.Label>Conference</Form.Label>
                    <Form.Control as="select" value={conference} onChange={(e) => selectConference(e.target.value)}>
                        <option value="">Conference</option>
                        {
                            conferences.map(conference => <option key={conference} value={conference}>{ conference }</option>)
                        }
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="division">
                    <Form.Label>Division</Form.Label>
                    <Form.Control as="select" value={division} onChange={(e) => setDivision(e.target.value)}>
                        <option value="">Division</option>
                        {
                            divisions.map(division => <option key={division} value={division}>{ division }</option>)
                        }
                    </Form.Control>
                </Form.Group>

                <Form.Row className="mt-5">
                    <Col md={6} sm={12} className="text-lg-right text-sm-center">
                        <Button type="button" onClick={() => props.cancel()} variant="danger" className="w-50">Cancel</Button>
                    </Col>
                    <Col md={6} sm={12} className="text-lg-left text-sm-center">
                        <Button type="submit" variant="dark" className="w-50">Submit</Button>
                    </Col>
                </Form.Row>
            </Form>
        </React.Fragment>
    );
}

export default TeamCreate;
