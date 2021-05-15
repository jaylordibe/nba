import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import AppRoute from './App.route';
import Footer from './components/shared/Footer';
import {Container} from 'react-bootstrap';
import {ToastContainer} from 'react-toastify';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Container fluid>
                <AppRoute/>
            </Container>
            <ToastContainer/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
