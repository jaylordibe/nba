import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoute from './App.route';
import Footer from './components/shared/Footer';
import {Container} from 'react-bootstrap';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Container fluid>
                <AppRoute/>
            </Container>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
