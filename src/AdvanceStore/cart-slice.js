import { createSlice } from "@reduxjs/toolkit";


const cardSlice = createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        change:false
    },
    reducers:{
        replaceCart(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItemToCart(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            state.change = true
            if(!existingItem)
            {
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            }
            else{
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price
            }
        },
        removeItemFromCart(state,action){
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id) 
            state.change = true

            if(state.totalQuantity > 0){

                if(existingItem.quantity === 1)
                {
                    state.items = state.items.filter(item => item.id !== id)
                }
                else if(existingItem.quantity > 1)
                {
                    existingItem.quantity--
                    existingItem.totalPrice = existingItem.totalPrice - existingItem.price
                }
                state.totalQuantity--;
            }
              
        },

    }
})


export const cartActions = cardSlice.actions
export default cardSlice.reducer
