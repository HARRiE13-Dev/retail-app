import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const welcome = () => {
  return (
    <>
      <div style={{ background: '#FCEFF1' }}>
        <Container style={{top:'50%'}} fluid="md">
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
                          width={200}
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
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
                          src="/image/icon-makro.png"
                          alt="r"
                          width={200}
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
        </Container>
      </div>
    </>
  )
}

export default welcome