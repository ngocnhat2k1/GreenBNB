import React, { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import { useForm } from "react-hook-form";

import Cookies from 'js-cookie';
import axios from 'axios';
import './DashBoard.css'

const Dashboard = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const [users, setUsers] = useState('')
    const [daysInWork, setDaysInWork] = useState('')
    const [paidOut, setPaidOut] = useState('')
    const [invested, setInvested] = useState('')

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
    const onSubmit = (e) => {
        e.defaultPrevented = true;
        console.log("chạy cái on");
        // console.log(users, daysInWork, paidOut, invested);
        console.log('changeData');
    }



    return (
        <Col sm={12} md={12} lg={9}>
            <div className='tab-content dashboard_content'>
                <div className='tab-pane fade show active'>
                    <form >
                        <Row>
                            <Col lg={6}>
                                <div className="fotm-group">
                                    <label htmlFor="users">Users</label>
                                    <input type="text"
                                        value={users}
                                        className="form-control"
                                        id="users"
                                        {...register('users', {
                                            required: true,
                                            onChange: (e) => {
                                                setUsers(e.target.value)
                                                // console.log(productName, JSON.parse(productInsessicon).name)
                                            }
                                        })} />
                                    {errors.users?.type && <span className='error'>Không được bỏ trống mục này</span>}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="fotm-group">
                                    <label htmlFor="daysInWork">Days in work</label>
                                    <input type="text"
                                        value={daysInWork}
                                        className="form-control"
                                        id="daysInWork"
                                        {...register('daysInWork', {
                                            required: true,
                                            onChange: (e) => {
                                                setDaysInWork(e.target.value)
                                                // console.log(productName, JSON.parse(productInsessicon).name)
                                            }
                                        })} />
                                    {errors.daysInWork?.type && <span className='error'>Không được bỏ trống mục này</span>}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="fotm-group">
                                    <label htmlFor="PaidOut">Paid out</label>
                                    <input type="text"
                                        value={paidOut}
                                        className="form-control"
                                        id="PaidOut"
                                        {...register('PaidOut', {
                                            required: true,
                                            onChange: (e) => {
                                                setPaidOut(e.target.value)
                                                // console.log(productName, JSON.parse(productInsessicon).name)
                                            }
                                        })} />
                                    {errors.PaidOut?.type && <span className='error'>Không được bỏ trống mục này</span>}
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="fotm-group">
                                    <label htmlFor="invested">Invested</label>
                                    <input type="text"
                                        value={invested}
                                        className="form-control"
                                        id="invested"
                                        {...register('invested', {
                                            required: true,
                                            onChange: (e) => {
                                                setInvested(e.target.value)
                                                // console.log(productName, JSON.parse(productInsessicon).name)
                                            }
                                        })} />
                                    {errors.invested?.type && <span className='error'>Không được bỏ trống mục này</span>}
                                </div>
                            </Col>
                        </Row>
                    </form>
                    <Col lg={12}>
                        <div className='vendor_order_boxed position-relative'>
                            <div className='btn_right_table'>
                                <button type='submit' className="theme-btn-one bg-black btn_sm" onClick={(e) => onSubmit(e)}>Change Data</button>
                                {/* {isChange ? <button type='submit' className="theme-btn-one bg-black btn_sm">Lưu</button> : <button type='submit' className="theme-btn-one bg-black btn_sm btn btn-secondary btn-lg" disabled>Lưu</button>} */}
                            </div>
                        </div>
                    </Col>
                </div>
            </div>
        </Col >
    )
}

export default Dashboard;