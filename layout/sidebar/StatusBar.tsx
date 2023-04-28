import React, { useState } from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const StatusBar = () => {
  const [orderPage, setOrderPage] = useState<any>(0);

  const [cash, setCash] = useState<any>(true);
  const [qr, setQr] = useState<any>(false);

  const [submit, setSubmit] = useState<any>(false);

  const [product, setProduct] = useState<any>('');

  const [show1, setShow1] = useState<any>(false);
  const [show2, setShow2] = useState<any>(false);

  const [quan1, setQuan1] = useState<number>(1);
  const [quan2, setQuan2] = useState<number>(1);

  const [total, setTotal] = useState<number>(0);

  const [price1, setPrice1] = useState<number>(0);
  const [price2, setPrice2] = useState<number>(0);


  const handleSubmitPay = () => {
    setSubmit(true)
  };

  const handleCash = () => {
    setCash(true)
    setQr(false)
  };
  const handleQr = () => {
    setCash(false)
    setQr(true)
  };

  const lower1 = () => {
    setQuan1(quan1 - 1)
  };
  const upper1 = () => {
    setQuan1(quan1 + 1)
  };
  const lower2 = () => {
    setQuan2(quan2 - 1)
  };
  const upper2 = () => {
    setQuan2(quan2 + 1)
  };

  const addItemsOrder = (type: any) => {
    if (type === 1) {
      setOrderPage(1)
    } else if (type === 2) {
      setOrderPage(2)
    }
  };


  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (product === '11101') {
      setShow1(true)
      setPrice1(117)
    } else if (product === '11102') {
      setShow2(true)
      setPrice2(265)
    }

  };


  if (orderPage === 0) {
    return (
      <>
        <Container className='mt-10 p-4 status-bar h-100' fluid>
          <h5>Create Order </h5>
          <hr />
          <div className="d-flex flex-column gap-2 h-100">
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
            <div className='d-flex mt-auto justify-content-end'>
              <button onClick={() => addItemsOrder(1)} type="button" className="btn btn-danger w-10 h-10 rounded-circle mb-4">+</button>
            </div>
          </div>
        </Container>
      </>
    )
  } else if (orderPage === 1) {
    return (
      <>
        <Container className='mt-10 p-4 status-bar h-100' fluid>
          <h5>Create Order </h5>
          <hr />
          <div className="d-flex flex-column gap-2 h-100 w-100">
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <Form className='px-0' onSubmit={handleSubmit}>
                <div className='d-flex gap-2 pt-2'>
                  <div>
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Product No."
                        name="product"
                        value={product || ''}
                        onChange={(e) => setProduct(e.target.value)}
                      />
                    </Form.Group>
                  </div>
                  <div>
                    <Button variant="success" type="submit">
                      Submit
                    </Button>
                  </div>
                </div>
              </Form>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <div className={`${show1 === true ? '' : 'd-none'} d-flex w-100 gap-2 align-items-center justify-content-start`}>
                <div>
                  <img
                    className="p-1 mt-4 border border-danger rounded "
                    src="/image/product-1.png"
                    alt=""
                    width="100"
                  />
                </div>
                <div className='d-flex flex-column gap-1'>
                  <div>
                    ไข่สดตราซีพี 30 ฟอง
                  </div>
                  <div className='text-danger'>
                    {price1} บาท
                  </div>
                  <div className='d-flex gap-2'>
                    <button onClick={() => lower1()} type="button" className="btn btn-danger p-0 " style={{ width: '22px', height: '22px' }}>-</button>
                    <div>
                      {quan1}
                    </div>
                    <button onClick={() => upper1()} type="button" className="btn btn-danger p-0" style={{ width: '22px', height: '22px' }}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center'>
              <div className={`${show2 === true ? '' : 'd-none'} d-flex w-100 gap-2 align-items-center justify-content-start`}>
                <div>
                  <img
                    className="p-1 mt-4 border border-danger rounded "
                    src="/image/product-2.png"
                    alt=""
                    width="100"
                  />
                </div>
                <div className='d-flex flex-column gap-1'>
                  <div>
                    กะทิ อร่อยดี 1 ลัง
                  </div>
                  <div className='text-danger'>
                    {price2} บาท
                  </div>
                  <div className='d-flex gap-2'>
                    <button onClick={() => lower2()} type="button" className="btn btn-danger p-0 " style={{ width: '22px', height: '22px' }}>-</button>
                    <div>
                      {quan2}
                    </div>
                    <button onClick={() => upper2()} type="button" className="btn btn-danger p-0" style={{ width: '22px', height: '22px' }}>+</button>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex flex-column mt-auto'>
              <div className='d-flex mt-auto'>
                <div>
                  <Form className='px-0'>
                    <div className='d-flex gap-2 pt-2'>
                      <div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Control type="product" placeholder="Coupon Code" />
                        </Form.Group>
                      </div>
                      <div>
                        <Button variant="danger" type="submit">
                          Apply
                        </Button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
              <div className='d-flex flex-column mt-auto mb-4'>
                <div className='bg-light rounded p-2 ticket' >
                  <div className={`${show1 === true ? '' : 'd-none'} d-flex justify-content-between`}>
                    <div>
                      ไข่สดตราซีพี 30 ฟอง
                    </div>
                    <div>
                      <span className="text-danger px-2">{price1}</span>
                      บาท
                    </div>
                  </div>

                  <div className={`${show2 === true ? '' : 'd-none'} d-flex justify-content-between`}>
                    <div>
                      กะทิ อร่อยดี 1 ลัง
                    </div>
                    <div>
                      <span className="text-danger px-2">{price2}</span>
                      บาท
                    </div>
                  </div>

                  <div className="mt-2 d-flex justify-content-between">
                    <div>
                      Coupon
                    </div>
                    <div>
                      <span className="text-danger px-2">0</span>
                      บาท
                    </div>
                  </div>

                  <div className="d-flex justify-content-between">
                    <div>
                      Shipping
                    </div>
                    <div>
                      <span className="text-danger px-2">20</span>
                      บาท
                    </div>
                  </div>

                </div>
                <hr style={{ borderStyle: 'dashed' }} />
                <div className='p-2 bg-light fw-6 text-center fw-semibold'>
                  Total : {total + 20 + (price1 * quan1) + (price2 * quan2)}
                </div>
              </div>
              <button onClick={() => addItemsOrder(2)} type="button" className="w-100 btn btn-danger mb-4">Check Out</button>
            </div>
          </div>
        </Container>
      </>
    )
  } else if (orderPage === 2) {
    return (
      <>
        <Container className='mt-10 p-4 status-bar h-100' fluid>
          <h5>Create Order </h5>
          <hr />
          <div className="d-flex flex-column gap-2 h-100 w-100">
            <div className='d-flex flex-column justify-content-start align-items-start'>
              <p className='text-danger fs-6 fw-semibold'>
                Payment !
              </p>
              <div>
                <img
                  className='d-block'
                  src="/image/icon-payment.png"
                  alt=""
                />
              </div>
            </div>
            <div className='d-flex flex-column w-100'>
              <div className='d-flex flex-column mt-auto mb-4'>
                <div className='bg-light rounded w-100 p-4' >
                  <div className={`d-flex justify-content-between`}>
                    <div>
                      ไข่สดตราซีพี 30 ฟอง
                    </div>
                    <div>
                      <span className="text-danger px-2">{price1}</span> บาท
                      <span className="text-secondary px-1">x{quan1}</span>
                    </div>
                  </div>

                  <div className={`d-flex justify-content-between`}>
                    <div>
                      กะทิ อร่อยดี 1 ลัง
                    </div>
                    <div>
                      <span className="text-danger px-2">{price2}</span> บาท
                      <span className="text-secondary px-1">x{quan2}</span>
                    </div>
                  </div>

                  <div className="mt-2 d-flex justify-content-between">
                    <div>
                      Coupon
                    </div>
                    <div>
                      <span className="text-danger px-2">0</span>
                      บาท
                    </div>
                  </div>
                  <div className="d-flex justify-content-between">
                    <div>
                      Shipping
                    </div>
                    <div>
                      <span className="text-danger px-2">20</span>
                      บาท
                    </div>
                  </div>
                </div>
                <hr style={{ borderStyle: 'dashed' }} />
                <div className='p-4 bg-light fw-6 text-center fw-semibold'>
                  Total : {total + 20 + (price1 * quan1) + (price2 * quan2)}
                </div>
              </div>
            </div>
            <div className='d-flex flex-row w-100 gap-2'>
              <button onClick={handleCash} type="button" className={`btn btn-light rounded-0 fw-bold ${cash ? 'active-border' : 'deactive-border'}`} style={{ fontSize: '16px' }}>Cash</button>
              <button onClick={handleQr} type="button" className={`btn btn-light rounded-0 fw-bold ${qr ? 'active-border' : 'deactive-border'}`} style={{ fontSize: '16px' }}>QR Code</button>
            </div>
            {cash === true ? (
              <>
                {submit === false ?
                  (
                    <>
                      <div className='d-flex flex-column w-100 gap-2'>
                        <div className='p-2 d-flex flex-row rounded' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                          <img
                            className='d-block px-2'
                            src="/image/icon-false.png"
                            alt=""
                          />
                          <p className='text-dark mb-0 text-center fw-normal'>wait for cash!</p>
                        </div>
                      </div>
                      <div className='d-flex flex-column mt-auto w-100 gap-2'>
                        <button onClick={handleSubmitPay} type="button" className="w-100 btn btn-danger mb-4">Submit</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='d-flex flex-column w-100 gap-2'>
                        <div className='p-2 d-flex flex-row rounded align-items-center' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                          <img
                            className='d-block px-2'
                            src="/image/icon-check.png"
                            alt=""
                          />
                          <p className='text-dark mb-0 text-center fw-normal'>Success !</p>
                        </div>
                      </div>
                    </>
                  )}
              </>
            ) : (
              <>
                {submit === false ?
                  (
                    <>
                      <div className='d-flex flex-column w-100 gap-2'>
                        <div className='p-2 d-flex flex-row rounded' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                          <img
                            className='d-block px-2'
                            src="/image/icon-false.png"
                            alt=""
                          />
                          <p className='text-dark mb-0 text-center fw-normal'>wait for cash!</p>
                        </div>
                        <div className='d-flex w-100 justify-content-center'>
                          <img
                            className='d-block px-2'
                            src="/image/qrcode.png"
                            alt=""
                          />
                        </div>
                        <p className='text-center'>
                          QR Code Generation
                        </p>
                      </div>
                      <div className='d-flex flex-column mt-auto w-100 gap-2'>
                        <button onClick={handleSubmitPay} type="button" className="w-100 btn btn-danger mb-4">Submit</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='d-flex flex-column w-100 gap-2'>
                        <div className='p-2 d-flex flex-row rounded align-items-center' style={{ width: '100%', minWidth: '150px', backgroundColor: '#FCEFF2' }}>
                          <img
                            className='d-block px-2'
                            src="/image/icon-check.png"
                            alt=""
                          />
                          <p className='text-dark mb-0 text-center fw-normal'>Success !</p>
                        </div>
                      </div>
                    </>
                  )
                }
              </>
            )}
          </div>
        </Container >
      </>
    )
  }

}

export default StatusBar
