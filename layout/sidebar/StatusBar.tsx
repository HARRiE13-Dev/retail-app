import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const StatusBar = () => {
  return (
    <>
      <Container className='mt-10 p-4 status-bar' fluid>
        <h5>Create Order </h5>
        <hr />
        <div className="d-flex flex-column gap-2">
          <div className='d-flex flex-column justify-content-center'>
            <p className='text-danger fs-6 fw-semibold'>
              Avaliable !
            </p>
            <div>
              <img
                className='d-block'
                src="/image/icon-available.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default StatusBar
