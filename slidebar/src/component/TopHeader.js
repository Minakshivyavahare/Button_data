import React from 'react'
import { Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import '../App.css'

const TopHeader = () => {

  const menuData =[
    {
      path:'/',
      name:'Home'
    },
    {
      path:"/about",
      name:"About"
    },
    {
      path:"/contact",
      name:"Contact"
    }
  ]
  return (
    <Navbar className='navbar' expand="lg">
      <Container>
        <Navbar.Brand href="/" className='brand'>Tic Tac Toe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {
              menuData.map((item)=>(
                <NavLink to={item.path} key={item.name}>
                  <div className='list_item'>{item.name}</div>
                  </NavLink>
              ))
            }
            
          </Nav>
          <Nav>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopHeader