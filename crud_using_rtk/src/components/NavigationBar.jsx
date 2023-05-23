import React from 'react'
import { Button, Container,  Form,  Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">RTK</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link to="/" >Create Post</Link>
          
          <Link to="/read">All Post</Link>
          
          
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavigationBar