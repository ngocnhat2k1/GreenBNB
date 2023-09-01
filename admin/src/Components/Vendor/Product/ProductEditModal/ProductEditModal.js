import React, { useState } from "react";
import { FaTimes, FaAlignJustify } from 'react-icons/fa'
import "../../Modal.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import Cookies from "js-cookie";

const ProductEditModal = ({ idDetail }) => {
    const [modal, setModal] = useState(false);
    const [miners, setMiners] = useState([]);

    const toggleModal = () => {
        setModal(!modal);
        axios
            .get(`https://api.greenbnb.info/accounts/admin/${idDetail}`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get('access_token')}`,
                    "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
                },
            })
            .then((response) => {
                console.log(response.data);
                setMiners(response.data.miners)
            })
            .catch(err => {
                console.log(err)
            });
    };

    const closeModal = () => {
        setModal(!modal);
    }
    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <FaAlignJustify onClick={toggleModal} className="btn-modal">
            </FaAlignJustify>
            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-edit-product">
                        <h2 className="title_modal">Danh sách miner của address {idDetail}</h2>
                        <div className='table-responsive'>
                            <table className='table pending_table'>
                                <thead>
                                    <tr>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Time remaining</th>
                                        <th scope="col">Profit received</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {miners.map((miner, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{miner.miner}</td>
                                                <td>{240 - miner.numberAddedMoney}</td>
                                                <td>{miner.numberAddedMoney * (miner.dailyBNB / 24)}</td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                        <button className="close close-modal" onClick={closeModal}><FaTimes /></button>
                    </div>
                </div>
            )
            }
        </>
    )
}

export default ProductEditModal