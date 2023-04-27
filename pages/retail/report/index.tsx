import React from 'react'
import Image from 'next/image'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Layout from '@/layout/Layout';
import { Carousel } from 'react-bootstrap';

const Report = () => {
  return (
    <>
      <Layout>
        <div className='p-4' style={{ background: '#F8F8F8', zIndex: '1' }}>
          <Container style={{ top: '50%' }} fluid>
            <Row className='text-center'>
              {/* -------------------- report P'Opal-------------------- */}


              
              {/* ------------------------------------------------------ */}
            </Row>
          
          </Container>
       
        </div >
      </Layout >
    </>
  )
}

export default Report