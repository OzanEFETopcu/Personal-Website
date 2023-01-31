import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from './Pictures/Logo(inverted).jpg'

export default function NavbarBS(){
  return (
    <>
      <Navbar bg="black" variant="dark">
          <Container>
              <Navbar.Brand>
                <img src={Logo} alt="Logo" width={40} />
              </Navbar.Brand>
              <Navbar.Brand href="#home">Ozan Topcu</Navbar.Brand>
              <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
          </Container>
      </Navbar>
    </>
  )
}
