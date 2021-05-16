import React, {useEffect, useState} from 'react';
import './TeamList.css';
import {Button, Col, Form, Pagination, Row, Table} from 'react-bootstrap';
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
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        const params = {
            conference,
            division,
            search,
            page,
            limit
        };
        props.search(params);
    }, [conference, division, search, limit]);

    function selectConference(conference: string): void {
        setConference(conference);
        const filteredDivisions = TeamUtil.findDivisionsByConference(conference);
        setDivisions(filteredDivisions);
    }

    function selectDivision(division: string): void {
        setDivision(division);
    }

    function searchOnEnter(event: GenericObject): void {
        setTimeout(() => {
            if (event.code === 'Enter' && event.target.value) {
                setSearch(event.target.value)
            }
        });
    }

    function loadPreviousPage(): void {
        if (props.teams.meta.current_page > 1) {
            const previousPage = props.teams.meta.current_page - 1;
            setPage(previousPage);
        }
    }

    function loadNextPage(): void {
        if (props.teams.meta.current_page < props.teams.meta.last_page) {
            const nextPage = props.teams.meta.current_page + 1;
            setPage(nextPage);
        }
    }

    return (
        <React.Fragment>
            <Row>
                <Col sm={2}>
                    <Button type="button" onClick={() => props.create()} variant="dark">New Team</Button>
                </Col>
                <Col sm={1}>
                    <Form.Control as="select" value={limit} onChange={(e) => setLimit(+e.target.value)}>
                        <option value="">Limit</option>
                        <option value="10">10</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </Form.Control>
                </Col>
                <Col sm={1}>
                    <Pagination>
                        <Pagination.Prev onClick={() => loadPreviousPage()}/>
                        <Pagination.Next onClick={() => loadNextPage()}/>
                    </Pagination>
                </Col>
                <Col sm={2}>
                    <Form.Control as="select" value={conference} onChange={(e) => selectConference(e.target.value)}>
                        <option value="">Conference</option>
                        {
                            conferences.map(conference => <option key={conference} value={conference}>{ conference }</option>)
                        }
                    </Form.Control>
                </Col>
                <Col sm={2}>
                    <Form.Control as="select" value={division} onChange={(e) => selectDivision(e.target.value)}>
                        <option value="">Division</option>
                        {
                            divisions.map(division => <option key={division} value={division}>{ division }</option>)
                        }
                    </Form.Control>
                </Col>
                <Col sm={4}>
                    <Form.Control onKeyPress={searchOnEnter} placeholder="Press Enter to search"/>
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={12}>
                    {
                        (props.teams.meta.total > 0)
                            ?
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
                            :
                            <h6>No search results...</h6>
                    }
                </Col>
            </Row>
            <Row className="mt-3">

                <Col sm={6}>

                </Col>
            </Row>
        </React.Fragment>
    );
}

export default TeamList;
