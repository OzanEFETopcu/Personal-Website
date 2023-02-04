import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Logo from './Pictures/Logo(inverted2) (1).jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function NavbarBS(){
  return (
    <>
    <style type='text/css'>
      {`
        .LinkedIn{
          color: white;
          font-size: xxx-large;
        }
        .Github{
          color: white;
          font-size: xxx-large;
        }
      `}
    </style>
      <Navbar bg="dark" variant="dark" sticky="top" className='py-3'>
          <Container>
              <Navbar.Brand>
                <img src={Logo} alt="Logo" width={50} />
              </Navbar.Brand>
              <Navbar.Brand href="#home" className='fs-4'>Ozan Topcu</Navbar.Brand>
              <Nav className="me-auto fs-5">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                  <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
                <Nav.Link href="https://www.linkedin.com/in/ozan-topcu-899b59189/">
                  <FontAwesomeIcon icon={faLinkedin} className="LinkedIn"></FontAwesomeIcon>
                </Nav.Link>
                <Nav.Link href="https://github.com/OzanEFETopcu">
                  <FontAwesomeIcon icon={faGithub} className="Github ms-3"></FontAwesomeIcon>
                </Nav.Link>
          </Container>
      </Navbar>
    </>
  )
}
