import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Cookies from 'js-cookie';
import axios from 'axios';
import './DashBoard.css'

const Dashboard = () => {
    const [orderPending, setOrderPending] = useState(0)
    const [totalProduct, setTotalProduct] = useState(0)
    const [totalSales, setTotalSales] = useState(0)
    useEffect(() => {
        // axios
        //     .get(`http://127.0.0.1:8000/api/v1/orders`, {
        //         headers: {
        //             Authorization: `Bearer ${Cookies.get('adminToken')}`,
        //         },
        //     })
        //     .then((response) => {
        //         setRecenOrders(response.data.data)

        //     })
    }, [])

    useEffect(() => {
        // axios
        //     .get(`http://127.0.0.1:8000/api/admin/dashboard`, {
        //         headers: {
        //             Authorization: `Bearer ${Cookies.get('adminToken')}`,
        //         },
        //     })
        //     .then((response) => {
        //         console.log(response.data)
        //         setOrderPending(response.data.totalOrdersPending)
        //         setTotalProduct(response.data.totalProducts)
        //         setTotalSales(response.data.totalSales)
        //     })
    }, [totalProduct])

    return (
        <Col sm={12} md={12} lg={9}>
            <div className='tab-content dashboard_content'>
                <div className='tab-pane fade show active'>
                    <Row>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='vendor_top_box'>
                                <input type="number" name="" value={totalProduct} onChange={(e) => setTotalProduct(e.target.value)} />
                                {/* <h2>{totalProduct}</h2> */}
                                <h4>Tổng Sản Phẩm</h4>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='vendor_top_box'>
                                <h2>{totalSales}</h2>
                                <h4>Tổng Đơn Hàng </h4>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={6} xs={12}>
                            <div className='vendor_top_box'>
                                <h2>{orderPending}</h2>
                                <h4>Số Đơn Hàng Đang Xử Lí</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col >
    )
}

export default Dashboard;