import React, {FormEvent, useState} from 'react';
import './TeamEditForm.css';
import {TeamEditFormProps} from './TeamEditFormProps';
import {Button, Col, Form} from 'react-bootstrap';

function TeamEditForm(props: TeamEditFormProps) {

    const [name, setName] = useState(props.team.name);
    const [conference, setConference] = useState(props.team.conference);
    const [division, setDivision] = useState(props.team.division);

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const id = props.team.id;
        const payload = {
            id,
            name,
            conference,
            division
        };

        props.submit(payload);
    }

    return (
        <React.Fragment>
            <Form onSubmit={(e) => submit(e)} className="shadow p-5">
                <h5 className="text-center">Edit Team Info</h5>

                <Form.Group controlId="name">
                    <Form.Label>Team Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="conference">
                    <Form.Label>Conference</Form.Label>
                    <Form.Control type="text" value={conference} onChange={(e) => setConference(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="division">
                    <Form.Label>Division</Form.Label>
                    <Form.Control type="text" value={division} onChange={(e) => setDivision(e.target.value)}/>
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

export default TeamEditForm;
