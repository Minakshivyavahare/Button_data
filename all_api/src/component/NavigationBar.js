import React from 'react';
import {  Container, Nav, Navbar } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';
 

const NavigationBar = () => {
  return (
    
    <Container className='container'>
    <Navbar  variant='dark' expand="lg" className='navbar'>
    <Container>
        <Navbar.Brand href="/posts" style={{'color':'orange','fontSize':'1.5rem','wordSpacing':'1px','letterSpacing':'2px','marginLeft':'5px'}}>API GROUPS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <LinkContainer to='/posts'>
                   
                    <Nav.Link>Posts</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/user'>
                    <Nav.Link>Users</Nav.Link>
                </LinkContainer>
                <LinkContainer to='/photos'>
                    <Nav.Link>Photos</Nav.Link>
                </LinkContainer> 
                <LinkContainer to='/todos'>
                    <Nav.Link>Todos</Nav.Link>
                </LinkContainer> 
                
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
</Container>
  )
}

export default NavigationBar