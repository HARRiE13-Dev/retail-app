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
  const [product, setProduct] = useState<any>('');
  const [show, setShow] = useState<any>(false);
  const [quan, setQuan] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);


  const lower = () => {
    setQuan(quan - 1)
  };
  const upper = () => {
    setQuan(quan + 1)
  };

  const addItemsOrder = (type: any) => {
    if (type === 1) {
      setOrderPage(1)
    }
  };


  const addProducts = (type: any) => {

  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (product === '123456789') {
      setShow(true)
      setPrice(117)
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
            <div className='d-flex flex-row justify-content-center align-items-centFer'>
              <div className={`${show === true ? '' : 'd-none'} d-flex w-100 gap-2 align-items-center justify-content-start`}>
                <div>
                  <img
                    className="p-1 mt-4"
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
                    {price} บาท
                  </div>
                  <div className='d-flex gap-2'>
                    <button onClick={() => lower()} type="button" className="btn btn-danger p-0 " style={{ width: '22px', height: '22px' }}>-</button>
                    <div>
                      {quan}
                    </div>
                    <button onClick={() => upper()} type="button" className="btn btn-danger p-0" style={{ width: '22px', height: '22px' }}>+</button>
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
                <div className='bg-light rounded p-2' >
                  <div className={`${show === true ? '' : 'd-none'} d-flex justify-content-between`}>
                    <div>
                      ไข่สดตราซีพี 30 ฟอง
                    </div>
                    <div>
                      <span className="text-danger px-2">{price}</span>
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
                <div className='bg-light fw-6 text-center fw-semibold'>
                  Total : {(total + 20 + price) * quan}
                </div>

              </div>


              <button onClick={() => addItemsOrder(1)} type="button" className="w-100 btn btn-danger mb-4">Check Out</button>
            </div>
          </div>
        </Container>
      </>
    )
  }

}

export default StatusBar
