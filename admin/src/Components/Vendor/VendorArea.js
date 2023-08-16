import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./VendorArea.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabList from './TabList';
import DashBoard from './Dashboard.js'
import Product from './Product/Product'



const VendorArea = () => {
    return (
        <section id='vendor_area' className='ptb-100'>
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={3}>
                        <TabList />
                    </Col>
                    <Routes>
                        <Route path='*' element={<DashBoard />} />
                        <Route path='/all-users' element={<Product />} />
                    </Routes>
                </Row>
            </Container>

        </section>
    )
}

export default VendorArea