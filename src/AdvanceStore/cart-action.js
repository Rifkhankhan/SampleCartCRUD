import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartData = () =>{
    return async (dispatch) =>{

        const fetchData = async () =>{

            const response = await fetch('https://react-app-855b5-default-rtdb.firebaseio.com/cart.json')

            if(!response.ok)
            {
                throw new Error('Could not fetch Data')
            }
    
            const data = await response.json()

            return data
        }

        try{
           const cartData = await fetchData();
           dispatch(cartActions.replaceCart({
                items:cartData.items || [],
                totalQuantity:cartData.totalQuantity
           }))
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                    status:"error",
                    title:"Error!",
                    message:'Sending cart data failed!'
                })
            )
        }
    }
}

export const sendCartData = (cart)=>{
    return async (dispatch)=>{
    dispatch(
        uiActions.showNotification({
            status:"Panding",
            title:"Pending...",
            message:'cart is sending!'
        }))

      

        const sendRequest = async()=>{
            const response = await fetch('https://react-app-855b5-default-rtdb.firebaseio.com/cart.json',{
                method:'PUT',
                body:JSON.stringify({
                    items:cart.items,
                    totalQuantity:cart.totalQuantity
                })
                })
                
            if(!response.ok)
            {
                throw new Error('Request Invalid')
            }
        }

        try{
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                  status:"success",
                  title:"Success...",
                  message:'cart is sent successfully!'
                })
              )
              
        }
        catch(error){
            dispatch(
                uiActions.showNotification({
                status:"error",
                title:"Error!",
                message:'Sending cart data failed!'
                })
            )
        }


      
        
  
       
    }
}