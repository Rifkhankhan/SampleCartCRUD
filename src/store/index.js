// import {  createStore } from 'redux'

// const initialState = {
//     counter:0,
//     showCounter:true
// }

// const counterReducer = (state = initialState,action) => {
//    if(action.type === 'increment')
//    {
//         return {
//             counter: state.counter+action.value,
//             showCounter:state.showCounter
//         }
//    }
//    else if(action.type === 'decrement')
//    {
//         return {counter: state.counter-action.value,showCounter:state.showCounter}
//    }
   
//    if(action.type === 'showCounter')
//    {
//         return {
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//    }
//    return state
// }


// const store = createStore(counterReducer)

// export default store;


// to use reduc-toolkii
//working with multiple reducers in one store such as auth and counter

// import {createSlice,configureStore} from '@reduxjs/toolkit'
// //createSlice,createReducer
// //configureStore can contain multiple reducers
// import {createStore} from 'redux'

// const initialCounterState = {
//     counter:0,
//     showCounter:true,
// }

// const counterSlice = createSlice({
//     name:'counter',
//     initialState:initialCounterState,
//     reducers:{
//         increment(state,action){
//             state.counter++;
//         },
//         decrement(state){
//             state.counter--;
//         },
//         increse(state,action){
//             state.counter = state.counter + action.payload
//         },
//         toggle(state){
//             state.showCounter = !state.showCounter
//         }
//     }
// })

// const initialAuthState = {
//     isAuthenticated:false
// }

// const authSlice = createSlice({
//     name:'auth',
//     initialState:initialAuthState,
//     reducers:{
//         login(state){
//             state.isAuthenticated = true
//         },
//         logout(state){
//             state.isAuthenticated = false
//         }
//     }

// })

// // const store  = createStore(counterSlice.reducer) // it only contains a reducer 
// const store  = configureStore({

//     // reducer: counterSlice.reducer // this is for only o
//     reducer:{
//         counterReducer:counterSlice.reducer,
//         authReducer:authSlice.reducer
//     }
// }) // it can contains more than one

// export const counterActions = counterSlice.actions
// export const authActions = authSlice.actions
// export default store


// this way is to use one store from a saperate indivitual store such as auth and counter
import {createSlice,configureStore} from '@reduxjs/toolkit'
//createSlice,createReducer
//configureStore can contain multiple reducers
import {createStore} from 'redux'
import authReducer from '../store/auth'
import counterReducer from '../store/counter'

// const store  = createStore(counterSlice.reducer) // it only contains a reducer 
const store  = configureStore({

    // reducer: counterSlice.reducer // this is for we have only one reducer
    reducer:{
        counterReducer:counterReducer,
        authReducer:authReducer
    }
}) // it can contains more than one

export default store