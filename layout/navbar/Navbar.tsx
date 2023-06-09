import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'next/image'
import { Card } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

const Navbars = () => {
  // Create a new Date object
  const currentDate = new Date();

  // Define an array of month names
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  // Get the day, month, and year values from the Date object
  const day = currentDate.getDate();
  const monthIndex = currentDate.getMonth();
  const year = currentDate.getFullYear();

  // Format the day and year values as strings
  const dayStr = day < 10 ? `0${day}` : `${day}`;
  const yearStr = year.toString();

  // Get the month name from the array
  const monthName = monthNames[monthIndex];

  const formattedDate = `${dayStr} ${monthName} ${yearStr}`;

  return (
    <Navbar bg="light" expand="lg" style={{ padding: 20 }}>
      <Container fluid>
        <div className='d-flex flex-column'>
          <Navbar.Brand className="m-0" href="#">
            <h3>
              Welcome, Keera
            </h3>
          </Navbar.Brand>
          <h5 className='text-muted'>{formattedDate}</h5>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          </Nav>
      
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Image
                src="/image/icon-user.png"
                alt="r"
                width={32}
                height={32}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/retail/info">About me</Dropdown.Item>
              <Dropdown.Item href="/">Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbars
