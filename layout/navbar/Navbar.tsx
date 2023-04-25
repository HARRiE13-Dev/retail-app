import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'
import { Card } from 'react-bootstrap';

const Navbars = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ padding: 20 }}>
            <Container fluid>
                <div className='d-flex flex-column'>
                    <Navbar.Brand className="m-0" href="#">
                        <h3>
                            Welcome, xxx
                        </h3>
                    </Navbar.Brand>
                    <h5 className='text-muted'>xx xxx xxx</h5>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <div>
                        <Card className='rounded-circle border-0' style={{ backgroundColor: '#D0CECE', marginRight: 20 }}>
                            <Image
                                src="/image/icon-user.png"
                                alt="r"
                                width={32}
                                height={32}
                            />
                        </Card>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navbars
