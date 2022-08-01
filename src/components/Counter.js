// import classes from './Counter.module.css';
// import {useSelector,useDispatch} from 'react-redux' //for this Functional Base Component
// // import {useSelector,useDispatch,connect} from 'react-redux' //for this Class Base Component
// //here connect to use ClassBaseComponent
// import { Component } from 'react';

// const Counter = () => {
//   const counter = useSelector(state=>state.counter)

//   const showCounter = useSelector(state=>state.showCounter)
//   const dispatch = useDispatch() //return a fucntion
//   const toggleCounterHandler = () => {
//    dispatch({
//       type:'showCounter',
//       value:showCounter
//    })
//   };

//   const incrementHandler = () =>{
//     dispatch({
//       type:'increment',
//       value:1

//     })
//   }

//   const decrementHandler = () =>{
//     dispatch({
//       type:'decrement',
//       value:1
//     })
//   }

//   const decrementBy5Handler = () =>{
//     dispatch({
//       type:'decrement',
//       value:5
      
//     })
//   }

//   const incrementBy5Handler = () =>{
//     dispatch({
//       type:'increment',
//       value:5

//     })
//   }

//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       {showCounter && <div className={classes.value}>{counter}</div>}
//       {
//         showCounter &&
//         <div>
//           <button className={classes.button} onClick={incrementHandler}>
//             Increment
//           </button>
//           <button className={classes.button} onClick={decrementBy5Handler}>
//             DecrementBy5
//           </button>

//           <button className={classes.button} onClick={incrementBy5Handler}>
//             IncrementBy5
//           </button>
//           <button className={classes.button} onClick={decrementHandler}>
//             Decrement
//           </button>
//         </div>
      
//       }
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };

// export default Counter;


// class Counter extends Component
// {
//   constructor(props) {
//     super(props)
  
//     this.state = {
//       counter:props.counter
//     }
//   }

//   incrementHandler = () =>{
//    this.props.increment()
//   }

//   decrementHandler = () =>{
//     this.props.decrement()

//   }

//   toggleCounterHandler = () =>{}

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button className={classes.button} onClick={this.incrementHandler.bind(this)}>
//             Increment
//           </button>
//           <button className={classes.button} onClick={this.decrementHandler.bind(this)}>
//             Decrement
//           </button>
//         </div>
        
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
  
// }

// const mapStateToProps = state =>{ // this is like useSelector equilant
//   return{
//     counter:state.counter
//   }
// }

// const mapDispatchToProps = dispatch =>{
//   return{
//     increment:() => dispatch({type:'increment'}),
//     decrement:() => dispatch({type:'decrement'})
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(Counter);

//*******redux-toolkit */

import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux' //for this Functional Base Component
// import {useSelector,useDispatch,connect} from 'react-redux' //for this Class Base Component
//here connect to use ClassBaseComponent
import { Component } from 'react';
import store from '../store/index';
import { counterActions } from '../store/counter';

const Counter = () => {
  const counter = useSelector(state=>state.counterReducer.counter)

  const showCounter = useSelector(state=>state.counterReducer.showCounter)
  const dispatch = useDispatch() //return a fucntion
  const toggleCounterHandler = () => {
   dispatch(counterActions.toggle())
  };

  const incrementHandler = () =>{
    dispatch(counterActions.increment())
  }

  const decrementHandler = () =>{
    dispatch(counterActions.decrement())
  }

  const decrementBy5Handler = () =>{
    dispatch(counterActions.increse(-5))
  }

  const incrementBy5Handler = () =>{
    dispatch(counterActions.increse(5))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      {
        showCounter &&
        <div>
          <button className={classes.button} onClick={incrementHandler}>
            Increment
          </button>
          <button className={classes.button} onClick={decrementBy5Handler}>
            DecrementBy5
          </button>

          <button className={classes.button} onClick={incrementBy5Handler}>
            IncrementBy5
          </button>
          <button className={classes.button} onClick={decrementHandler}>
            Decrement
          </button>
        </div>
      
      }
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
