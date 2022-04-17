import { useSelector, useDispatch, connect } from 'react-redux';
import React from 'react'
import classes from './Counter.module.css';
import { counterActions } from '../store/index'

const Counter = () => {
 const counter = useSelector(state => state.counter);
 const show = useSelector(state => state.showCounter )
 const dispatch = useDispatch()

 const incrementHandler = () => {
   dispatch(counterActions.increment())
 }

 const increaseHandler = () => {
   dispatch(counterActions.increase(5))
 }

 const decrementHandler = () => {
  dispatch(counterActions.decrement())
 }

 const toggleCounterHandler = () => {
   dispatch(counterActions.toggle)
 };

 return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {
       show && <div className={classes.value}>{counter}</div>
      }
        
          <div>
            <button onClick={incrementHandler}> Increment</button>
            <button onClick={decrementHandler}> Decrease </button>
            <button onClick={increaseHandler}> Increase by 5</button>
          </div> 
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
 );
};

export default Counter;


// class Counter extends React.Component {
//   incrementHandler(){
//     this.props.increment()
//   }

//   decrementHandler(){
//     this.props.decrement()
//   }

//   toggleCounterHandler(){

//   }

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
//   }
// }
// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = (dispatch) =>{
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);