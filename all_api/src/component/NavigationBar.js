import React from 'react';
import {  Button, Container, Form, Image, Nav, Navbar } from 'react-bootstrap';
 import { LinkContainer } from 'react-router-bootstrap';
 import image1 from './3.jpg'
 

const NavigationBar = () => {
  return (
    
    <Container className='container'>
    <Navbar  variant='dark' expand="lg" className='navbar'>
    <Container>
    <Image src={image1} height="40px" width='50px' rounded='5px'/>
        <Navbar.Brand href="/posts" style={{'color':'balck','fontSize':'1.5rem','wordSpacing':'1px','letterSpacing':'2px','marginLeft':'8px'}}>API GROUPS</Navbar.Brand>
        
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
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
    </Container>
</Navbar>

</Container>
  )
}

export default NavigationBar;