import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import '../DashBoard.css'
import ListProducts from './ListProduct/ListProduct';
import axios from 'axios';
import Cookies from 'js-cookie';



const Product = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get(`https://api.x2in48h.com/accounts/admin`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('access_token')}`,
                    "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
                },
            })
            .then((response) => {
                setUsers(response.data);
            })
    }, [])

    return (
        <Col sm={12} md={12} lg={9}>
            <div className='tab-content dashboard_content'>
                <div className='tab-pane fade show active'>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className='position-relative'>
                            <div className='vendor_order_boxed pt-4'>
                                <div className='mb-2'>
                                    <h4>
                                        Tất cả user
                                    </h4>
                                </div>
                                <div className='table-responsive'>
                                    <table className='table pending_table'>
                                        <thead>
                                            <tr>
                                                <th scope="col">Address</th>
                                                <th scope="col">Deposit Address</th>
                                                <th scope="col">Wallet</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <ListProducts listProducts={users} />
                                        </tbody>
                                    </table>
                                    {/* < Col lg={12}>
                                        <ul className={styles.pagination}>
                                            {page > 1 && <li className={styles.pageItem}>
                                                <Link to={`?page=${prevPage}`} className={styles.pageLink}>«</Link>
                                            </li>}
                                            {(page === lastPage && lastPage > 3) && <li className={styles.pageItem}>
                                                <Link to={`?page=${1}`} className={styles.pageLink}>1</Link>
                                            </li>}
                                            {(page === lastPage && lastPage > 3) && <li className={`${styles.pageItem} ${styles.disable}`}>
                                                <Link className={styles.pageLink}>...</Link>
                                            </li>}
                                            {page - 1 > 0 && <li className={styles.pageItem}><Link to={`?page=${prevPage}`} className={styles.pageLink}>{page - 1}</Link></li>}

                                            <li className={`${styles.pageItem} ${styles.active}`}>
                                                <Link to={`?page=${page}`} className={styles.pageLink}>{page}</Link>
                                            </li>
                                            {page !== lastPage && <li className={styles.pageItem}>
                                                <Link to={`?page=${nextPage}`} className={styles.pageLink}>{page + 1}</Link>
                                            </li>}
                                            {page !== lastPage && <li className={`${styles.pageItem} ${styles.disable}`}>
                                                <Link className={styles.pageLink}>...</Link>
                                            </li>}
                                            {page !== lastPage && <li className={styles.pageItem}>
                                                <Link to={`?page=${lastPage}`} className={styles.pageLink}>{lastPage}</Link>
                                            </li>}
                                            {page !== lastPage && <li className={styles.pageItem}>
                                                <Link to={`?page=${nextPage}`} className={styles.pageLink}>»</Link>
                                            </li>}
                                        </ul>
                                    </Col> */}

                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </Col>
    )
}

export default Product