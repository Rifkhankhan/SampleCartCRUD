import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux'
import { uiActions } from '../../AdvanceStore/ui-slice';
import {useSelector} from 'react-redux'
const CartButton = (props) => {
  const cartQuantity = useSelector(state=>state.cartSlice.totalQuantity)
  const dispatch = useDispatch()
  const uiHandler = () =>{
    dispatch(uiActions.toggle())
  }
  return (
    <button className={classes.button} onClick={uiHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
