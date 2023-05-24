import { RemoveProduct } from '../../actions'
import './index.css'
import { connect } from 'react-redux'

const ProductItem = (props) => {
    const { item, RemoveProduct } = props
    const deleteItem = () => {
        RemoveProduct(item.name)
    }
    return (
        <>
            <li className='product-item'>
                <p className='product-name'>{item.name}</p>
                <button className='remove-button' onClick={deleteItem}>X</button>
            </li>
        </>
    )
}

export default connect(null, { RemoveProduct })(ProductItem)