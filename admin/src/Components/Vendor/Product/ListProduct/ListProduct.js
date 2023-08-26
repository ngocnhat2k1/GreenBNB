import React from 'react'
import ProductEditModal from '../ProductEditModal/ProductEditModal'

const ListProducts = ({ listProducts }) => {
    return (
        <>{listProducts && Object.values(listProducts).map((user) => {
            return (
                <tr key={user._id}>
                    <td>{user._id}</td>
                    <td>{user.depositAddress.id}</td>
                    <td>{user.depositAddress.wallet.bNB}</td>
                    <td>
                        <div className='edit_icon'><ProductEditModal idDetail={user._id} /></div>
                    </td>
                </tr>
            )
        })
        }
        </>
    )
}

export default ListProducts