import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "./store/CounterStore";

import "./styles.css";

export default function App() {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); // { type: SOME_UNIQUE_IDENTIFIER, payload: __ };
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="App">
      <h2>Redux Counter</h2>
      {showCounter && <h2>Counter: {counter}</h2>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increaseHandler}>Increment by 10</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle</button>
    </div>
  );
}
