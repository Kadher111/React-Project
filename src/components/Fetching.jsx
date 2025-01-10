import React, { useState, useEffect } from "react";

function Fetching() {
  const [val, setVal] = useState(0);
  return (
    <div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      value : {val}
    </div>
  );
}

export default Fetching;
