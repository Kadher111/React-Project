import React, {useContext} from "react";
import { CountContext } from "../App";

function ComponentA() {
  const countContext = useContext(CountContext);
  return (
    
    <div>
      component A - {countContext.countState}...........
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("reset")}>reset</button>
      <button onClick={() => countContext.countDispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default ComponentA;
