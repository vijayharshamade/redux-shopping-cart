import { connect } from 'react-redux'
import './index.css'

const Batch = ({ products }) => {

    return (
        <>
            <p className='products'>Total Products <span className="span">{products.length}</span></p>
        </>
    )
}

const mapStateToProps = state => ({
    products: state
})

export default connect(mapStateToProps)(Batch)