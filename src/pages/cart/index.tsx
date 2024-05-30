import CartView from './view'
import { useSelector } from 'react-redux'
import { cartSelector } from '../../shared/redux-flow/selector'

const CartPage = () => {
  const cartStore = useSelector(cartSelector);
  return (
    <CartView data={cartStore}/>
  )
}

export default CartPage