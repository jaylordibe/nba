import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
    return (
        <React.Fragment>
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    <img
                        src="/assets/images/logo.png"
                        className="d-inline-block align-top"
                        alt="NBA Logo"
                    />
                </Navbar.Brand>
            </Navbar>
        </React.Fragment>
    );
}

export default Header;
