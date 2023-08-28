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
        axios
            .get(`https://greenbnb.onrender.com/home-page`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('access_token')}`,
                    "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
                },
            })
            .then((response) => {
                setDaysInWork(response.data.daysInWork)
                setUsers(response.data.users)
                setInvested(response.data.invested)
                setPaidOut(response.data.paidOut)

            })
    }, [])
    const onSubmit = () => {
        // e.defaultPrevented = true;
        const dataa = {
            users: Number(users),
            daysInWork: Number(daysInWork),
            paidOut: Number(paidOut),
            invested: Number(invested)
        }
        axios
            .put(`https://greenbnb.onrender.com/home-page`, dataa,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get('access_token')}`,
                        "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
                    },
                })
            .then((response) => {
                console.log(response.data);
                alert('Change data success')
            })
            .catch(function (error) {
                console.log(error);
            }
            );
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