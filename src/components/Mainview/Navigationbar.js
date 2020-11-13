import React from 'react';
import * as S from './Navigationbar.styles';
import {Nav, Navbar} from 'react-bootstrap';

const Navigationbar=() => {
    return(
        <S.Styles>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/"> Admin Panel</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Account</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">Dropdown</Nav.Link></Nav.Item>
                        <Nav.Item><Nav.Link href="/">Log Out</Nav.Link></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </S.Styles>
    );
}

export default Navigationbar;