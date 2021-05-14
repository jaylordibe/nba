import React from 'react';
import './App.css';
import Header from './components/Header';
import AppRoute from './App.route';
import Footer from './components/Footer';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <AppRoute/>
            <Footer/>
        </React.Fragment>
    );
}

export default App;
