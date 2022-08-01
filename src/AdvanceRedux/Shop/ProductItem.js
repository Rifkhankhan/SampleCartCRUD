import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux'
import { cartActions } from '../../AdvanceStore/cart-slice';
import { uiActions } from '../../AdvanceStore/ui-slice';
const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()

  const addCartHandler = () =>{
    dispatch(cartActions.addItemToCart({id,title,price}))
  }
  return (
    <li className={classes.item} >
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button className={classes.button} onClick={addCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
