import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const welcome = () => {
  return (
    <>
      <div className='p-4' style={{ background: '#FCEFF1', zIndex: '1' }}>
        <div className='background-welcome'></div>
        <Container style={{ top: '50%' }} fluid="md">
          <Row className='text-center'>
            <Col>
              <h1 className='fw-bold' style={{ fontSize: '80px', color: '#C20B0F' }}>
                Greetings !
              </h1>
            </Col>
          </Row>
          <Row className='text-center mt-4'>
            <Col>
              <h6 className='text-secondary fw-normal'>
                Start with our privilege only special for you
              </h6>
            </Col>
          </Row>
          <Row className='text-center mt-4'>
            <Col>
              <Image
                src="/image/logo2.png"
                alt="r"
                width={100}
                height={20}
              />
            </Col>
          </Row>
          <Row className='text-left mt-4'>
            <div className='d-flex justify-content-center align-items-center gap-4'>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-makro.png"
                          alt="r"
                          width={150}
                          height={40}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-coke.png"
                          alt=""
                          width={150}
                          height={55}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-pepsi.png"
                          alt=""
                          width={150}
                          height={55}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-lotus.png"
                          alt=""
                          width={150}
                          height={40}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </div>
          </Row>
          <Row className='text-left mt-4'>
            <div className='d-flex justify-content-center align-items-center gap-4'>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-cp.png"
                          alt="r"
                          width={100}
                          height={100}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-pg.jpg"
                          alt="r"
                          width={100}
                          height={100}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-unilever.png"
                          alt="r"
                          width={100}
                          height={80}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
              <div>
                <Col>
                  <Card className='shadow border-0' style={{ width: '16rem' }}>
                    <Card.Body>
                      <Card className="border-0 d-flex justify-content-center align-items-center" style={{ height: '10rem' }}>
                        <Image
                          src="/image/icon-nestle.png"
                          alt="r"
                          width={100}
                          height={100}
                        />
                      </Card>
                      <Card.Title >15% Cashback
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-danger">First time use
                      </Card.Subtitle>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            </div>
          </Row>
          <Row className='text-left mt-4'>
            <div className='d-flex justify-content-center align-items-center gap-4'>
              <div>
   
                  <Button variant="primary">Primary</Button>
              
              </div>
            </div>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default welcome