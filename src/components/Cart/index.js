import './index.css'
import ProductItem from '../ProductItem'
//import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react'
import { connect } from 'react-redux'
import { AddProduct } from '../../actions';

//console.log(AddProduct)

const Cart = ({ products, AddProduct }) => {

    const [item, setItem] = useState("")
    const onChangeProduct = event => {
        setItem(event.target.value)
    }
    const submitHandler = e => {
        e.preventDefault()
        if (item !== "") {
            AddProduct({ name: item })
            setItem("")
        }
        setItem("")
    }

    return (
        <>
            <form className="form-container" onSubmit={submitHandler}>
                <input type="text" placeholder="Add Products" className='input' value={item} onChange={onChangeProduct} />
                <button className='add-button' type="submit" >Add Product</button >
                <ul className='list-container'>
                    {products.map((eachItem) => (
                        <ProductItem key={eachItem.id} item={eachItem} />
                    ))}
                </ul>
            </form>
        </>
    )
}

const mapsStateToProps = (state) => {
    return {
        products: state
    }
}
export default connect(mapsStateToProps, { AddProduct })(Cart)




//const dummy = [{ id: 1, name: 'lenovo' }, { id: 2, name: 'samsung' }]
//const [cart,setCart] = useState([])
//console.log(cart)
//const [product, setProduct] = useState("")
// const onChangeProduct = event => {
//     setProduct(event.target.value)
// }

// const submitForm = event => {
//     event.preventDefault()

//     const newItem = {
//         id: uuidv4(),
//         name: product
//     }
//     setCart((prevItems) => [...prevItems, newItem])
//     setProduct("")
// }

