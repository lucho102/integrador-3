import { useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import { CartContext } from '../context/CartContext'

import Box from "./Box"
import Text from "./Text"
import Modal from './Modal'
import Counter from './Counter'

function Cart() {

    const { cart, totalQuantity } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    const totalAmount = cart.reduce( (acc, item) => acc + item.prod.amount * item.quantity, 0 )

    return (
        <>
            <Box className="cart__container" role="button" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faShoppingCart} size="xl" />
                <Box className="cart__badge">
                    <Text as="span">{totalQuantity}</Text>
                </Box>
            </Box>
            <Modal show={showModal} closeModal={() => setShowModal(false)}>
                <Text as='h3' className="subtitle-MD">Productos seleccionados</Text>
                {
                    cart.map(
                        ({prod, quantity}) =>
                            <Box key={prod.id || prod._id} className="product-row">
                                <Text as="h4" className="product-name">{prod.name}</Text>
                                <Counter product={prod} />
                                <Text as="b" className="product-price">
                                {`$ ${Number(prod.amount * quantity).toLocaleString('es-AR')}.-`}
                                </Text>
                            </Box>
                    )
                }
                <Box className="total-price d-flex align-center space-between">
                    <Text as='h4'>Total:</Text>
                    <Text as='b'>{`$ ${Number(totalAmount).toLocaleString('es-AR')}.–`}</Text>
                    
                </Box>
            </Modal>
        </>
    )
}

export default Cart