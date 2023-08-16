import React from 'react'
import DeleteProduct from '../DeleteProduct/DeleteProduct'
import ProductEditModal from '../ProductEditModal/ProductEditModal'

const ListProducts = ({ listProducts }) => {
    return (
        <>{listProducts && Object.values(listProducts).map((Product) => {
            return (
                <tr key={Product.id}>
                    <td>
                        <a href="/product-details-one/1 ">{Product.name}</a>
                    </td>
                    <td>${Product.price}</td>
                    <td>{Product.percentSale}</td>
                    {Product.status === 1 ? <td>Còn hàng</td> : <td>hết hàng</td>}
                    {Product.deletedAt === 1 ? <td>đã xoá</td> : <td>chưa xoá</td>}
                    <td>
                        <div className='edit_icon'><ProductEditModal idDetail={Product.id} /></div>
                    </td>
                </tr>
            )
        })
        }
        </>
    )
}

export default ListProducts