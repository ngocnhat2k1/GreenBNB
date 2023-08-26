import styles from './LoginArea.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import axios from '../../service/axiosClient';
import Cookies from 'js-cookie';
import { FaRegCheckCircle, FaTimesCircle, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

function LoginArea() {
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState('');
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const closeModal = () => {
        if (success) {
            setModal(!modal);
            navigate('/')
        } else {
            setModal(!modal);
        }
    }



    const onSubmit = (data) => {
        axios
            .post('https://greenbnb.onrender.com/auth/admin/login', data, {
                headers: {
                    "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
                }
            })
            .then(function (response) {
                if (response.data.statusCode === 200) {
                    const adminToken = response.data.access_token;
                    Cookies.set('access_token', adminToken, { path: '/' });
                    setSuccess(true);
                    setMessage('');
                    setModal(!modal)
                } else {
                    setMessage(response.data.errors);
                    setSuccess(response.data.statusCode);
                    setModal(!modal)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <section id={styles.loginArea}>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 3 }} md={12} sm={12} xs={12}>
                        <div className={styles.accountForm}>
                            <h3>Login</h3>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={styles.defaultFormBox}>
                                    <label htmlFor="username">Username
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        className="FormInput"
                                        type="text"
                                        placeholder="Tên tài khoản"
                                        {...register("username", { required: true, minLength: 3 })}
                                    />
                                    {errors["username"] && (
                                        <p className="checkInput">Username không được để trống</p>
                                    )}
                                </div>
                                <div className={styles.defaultFormBox}>
                                    <label htmlFor="password">Mật Khẩu
                                        <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        className="FormInput"
                                        type="password"
                                        placeholder="Mật khẩu"
                                        {...register("password", { required: true })}
                                    />
                                    {errors["password"] && (
                                        <p className="checkInput">Mật khẩu không được để trống</p>
                                    )}
                                </div>
                                <div className={styles.loginSubmit}>
                                    <button type="submit">Đăng Nhập</button>
                                </div>
                                {modal && (
                                    <div className="modal text-center">
                                        <div onClick={closeModal} className="overlay"></div>
                                        <div className="modal-content">
                                            <div>
                                                {success === true ? <FaRegCheckCircle size={90} className='colorSuccess' /> : <FaTimesCircle size={90} className='colorFail' />}
                                            </div>
                                            <h2 className="title_modal">Đăng nhập {success ? 'thành công' : 'thất bại'}</h2>
                                            <p className='p_modal'>{message}</p>
                                            <div className='divClose'>
                                                <button className="close close-modal" onClick={closeModal}><FaTimes /></button>
                                            </div>
                                            <div className="btn_right_table">
                                                <button className="theme-btn-one bg-black btn_sm" onClick={closeModal}>OK </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* <Link to="/register" className={styles.createAccount}>Create Your Account?</Link> */}
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default LoginArea