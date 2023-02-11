import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Outlet, NavLink } from 'react-router-dom'

export default ({ children }) => (
  <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav>
          <Nav.Link as={NavLink} to="/aifwing">Classifier</Nav.Link>
          <Nav.Link as={NavLink} to="/aifwing/flasher">Firmware</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    
    <Container className="my-3">
      <Outlet />
    </Container>
  </>
)
