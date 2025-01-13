import React, { useReducer } from "react";

const initialState = {
  firstCount: 0,
  secondCount: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, firstCount: state.firstCount + action.value };
    case "decrement":
      return { ...state, firstCount: state.firstCount - action.value };
    case "sc":
      return { ...state, secondCount: state.secondCount + action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function CounterOne() {
  const [Count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count -- {Count.firstCount}</div>
      <div>Count -- {Count.secondCount}</div>

      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment by 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <button onClick={() => dispatch({ type: "sc", value: 10 })}>
        secondCounter
      </button>
    </div>
  );
}

export default CounterOne;
