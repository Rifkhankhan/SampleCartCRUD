import { Fragment } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import Header from './components/Header'
import Auth from './components/Auth'
import Counter from './components/Counter'
import UserProfile from './components/UserProfile'
import Layout from './AdvanceRedux/Layout/Layout'
import Cart from './AdvanceRedux/Cart/Cart'
import Products from './AdvanceRedux/Shop/Products'
import {useEffect} from 'react'
import {uiActions} from './AdvanceStore/ui-slice'
import classes from './App.css'
import {sendCartData} from './AdvanceStore/cart-action'
import { fetchCartData } from './AdvanceStore/cart-action';
let initial = true

function App() {
  const isVisible = useSelector(state=>state.ui.cartIsVisible)
  const cart = useSelector(state => state.cartSlice)
  const notification = useSelector(state=>state.ui.notification)
  const dispatch = useDispatch()
  

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(()=>{

    
    // const sendCartData  = async()=>{

      //this is used without thunk
      // dispatch(
      //   uiActions.showNotification({
      //     status:"Panding",
      //     title:"Pending...",
      //     message:'cart is sending!'
      //   })
      // )
      //  const response = await fetch('https://react-app-855b5-default-rtdb.firebaseio.com/cart.json',{
      //   method:'PUT',
      //   body:JSON.stringify(cart)
      // })

      // if(!response.ok)
      // {
      //   throw new Error('Request Invalid')
      // }
      
      // if(initial)
      // {
      //   initial = false
      //   return
      // }
      
      // dispatch(
      //     uiActions.showNotification({
      //       status:"success",
      //       title:"Success...",
      //       message:'cart is sent successfully!'
      //     })
      //   )
        
      // }

      // sendCartData().catch((error)=>{
      //   dispatch(
      //     uiActions.showNotification({
      //       status:"error",
      //       title:"Error!",
      //       message:'Sending cart data failed!'
      //     })
      //   )
      // })

      //this is used with thunk


      if(initial)
      {
        initial = false
        return
      }
      if(cart.change)
          dispatch(sendCartData(cart))
    // }
  },[cart,dispatch])

  // const isAuthenticated = useSelector(state => state.authReducer.isAuthenticated)
  return (

    // this is basic redux application
    // <Fragment >
    //   <Header />
    //   {
    //     !isAuthenticated && <Auth />
    //   }
    //   {
    //     isAuthenticated && <UserProfile />
    //   }
    //   <Counter />
    // </Fragment>

// this is advance redux
    <Fragment>
      
        {notification && <p className='noti'>  {notification.title} </p>}
        <Layout>
          {isVisible &&<Cart />}
          <Products />
        </Layout>
    </Fragment>
  );
}

export default App;


//npm install 
//npm install redux react-redux
//npm install @reduxjs/toolkit