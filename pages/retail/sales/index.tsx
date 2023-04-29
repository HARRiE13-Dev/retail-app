import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '@/layout/Layout';
import { Carousel } from 'react-bootstrap';
import Link from 'next/link'

const Sales = () => {
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
                  <div className="p-4 rounded-circle border border-danger" style={{ backgroundColor: '#FCEFF2' }}>
                    <Image
                      src="/image/icon-sales.png"
                      alt=""
                      width={50}
                      height={50}
                      className='d-block'
                    />
                  </div>
                  <p className='text-danger fw-semibold fs-5 list-unstyled underline'>Sales</p>
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
            <div className="d-flex px-4 gap-2">
              <div className='d-flex flex-column gap-4 mr-auto'>
                <p className='text-dark fw-normal fs-5'>Transection!</p>
              </div>
              <div className='d-flex flex-column'>
                <div className='p-2 border border-danger d-flex flex-column rounded' style={{ minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                  <p className='text-dark mb-1 fw-normal'>Revenue</p>
                  <p className='text-danger  fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>10,456.00 -</p>
                </div>
              </div>
              <div className='d-flex flex-column'>
                <div className='p-2 border border-danger d-flex flex-column rounded' style={{ minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                  <p className='text-dark mb-1 fw-normal'>Total Order</p>
                  <p className='text-danger fs-5 mb-0 fw-semibold' style={{ textAlign: 'right' }}>36</p>
                </div>
              </div>
            </div>
          </Container>
          <Container className='mt-10' fluid="md">
            <div className="d-flex flex-column px-4 gap-2">
              <div className='rounded border bg-white py-2 px-4'>
                <div className='d-flex flex-row justify-content-between gap-2'>
                  <div className='d-flex align-self-center'>
                    <Image
                      src="/image/icon-check.png"
                      alt=""
                      width={30}
                      height={30}
                      className='d-block'
                    />
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Total Order</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>010458783445</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Date</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>10 / 11 / 23</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Time</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>08:35 AM</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Total Product</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>7 รายการ</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-4 d-flex flex-column rounded' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                      <p className='text-danger fs-5 mb-0 text-center fw-semibold'>655.00 <span className='fw-normal text-secondary fs-5'>บาท</span> </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='rounded border bg-white py-2 px-4'>
                <div className='d-flex flex-row justify-content-between gap-2'>
                  <div className='d-flex align-self-center'>
                    <Image
                      src="/image/icon-check.png"
                      alt=""
                      width={30}
                      height={30}
                      className='d-block'
                    />
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Total Order</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>010458783445</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Date</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>10 / 11 / 23</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Time</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>08:35 AM</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-2 d-flex flex-column rounded' style={{ minWidth: '150px', }}>
                      <p className='text-danger mb-2 fw-normal'>Total Product</p>
                      <p className='text-dark fw-normal fs-5 mb-0'>7 รายการ</p>
                    </div>
                  </div>
                  <div className='d-flex flex-column'>
                    <div className='p-4 d-flex flex-column rounded' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                      <p className='text-danger fs-5 mb-0 text-center fw-semibold'>655.00 <span className='fw-normal text-secondary fs-5'>บาท</span> </p>
                    </div>
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

export default Sales