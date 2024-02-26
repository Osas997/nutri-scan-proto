import React from "react";
import { useState } from "react";

export default Countercom = () => {
   const [count, setCount] = useState(0);

   return (
      <div className="card">
         <h1>count is {count}</h1>
         <button onClick={() => setCount((count) => count + 1)}>Tambah</button>
         <button
            disabled={count <= 0 ? true : false}
            onClick={() => setCount((count) => count - 1)}
         >
            Kurang
         </button>
      </div>
   );
};
