import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '@/layout/Layout';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link'

const Info = () => {
  return (
    <>
      <Layout>
        <div className='p-4' style={{ background: '#F8F8F8', zIndex: '1' }}>
          <Container style={{ top: '50%' }} fluid>
            <Row className='text-center'>
              <Col>
                <Carousel>
                  <Carousel.Item>
                    <img

                      className='d-block w-100'
                      src="/image/banner-1.jpg"
                      alt=""
                      style={{ borderRadius: '30px 30px 30px 30px' }}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img

                      className='d-block w-100'
                      src="/image/banner-1.jpg"
                      alt=""
                      style={{ borderRadius: '30px 30px 30px 30px' }}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
            <Row className='text-center mt-4 px-4'>
              <div className="d-flex justify-content-between">
                <div className='d-flex flex-column gap-4'>
                  <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                    <Image
                      src="/image/icon-purchese.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  <p className='text-danger fw-semibold fs-5'>Purchase</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                    <Image
                      src="/image/icon-stock.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  <p className='text-danger fw-semibold fs-5'>Stock</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                <Link href="/retail/sales" className='mt-0 mb-0'>
                  <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                    <Image
                      src="/image/icon-sales.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5 list-unstyled'>Sales</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <Link href="/retail/report" className='mt-0 mb-0'>
                    <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                      <Image
                        src="/image/icon-report.png"
                        alt=""
                        width={50}
                        height={50}
                        className='d-block mb-0'
                      />
                    </div>
                  </Link>
                  <p className='text-danger fw-semibold fs-5'>Dashboard</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <div className="p-4 rounded-circle border border-secondary bg-light" >
                    <Image
                      src="/image/icon-privilege.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  <p className='text-secondary fw-semibold fs-5'>Privilege</p>
                </div>
                <div className='d-flex flex-column gap-4'>
                  <div className="p-4 rounded-circle border border-secondary bg-light" >
                    <Image
                      src="/image/icon-membership.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  <p className='text-secondary fw-semibold fs-5'>Members</p>
                </div>

              </div>
            </Row>
          </Container>
          <Container className='mt-10' fluid="md">
            <div className="d-flex flex-column px-4 gap-2">
              <div className='rounded border bg-white py-2 px-4'>
                <div className='d-flex flex-row justify-content-between gap-2'>
                  <div className='d-flex align-self-center'>
                    <Image
                      src="/profile.png"
                      alt=""
                      width={900}
                      height={750}
                      className='d-block'
                    />
                  </div>
               
                </div>
              </div>
          
            </div>
          </Container>
        </div >
      </Layout >
    </>
  )
}

export default Info