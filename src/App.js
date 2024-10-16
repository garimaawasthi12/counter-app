import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App(){

  const [value, setValue] = useState(0);
  
 
  return (
    <div className="flex flex-col gap-4 bg-gray-400 h-screen items-center justify-center">
      <div className="text-4xl">Counter App</div>
      <div className="flex gap-5 text-4xl">
        <button onClick={()=> setValue(value-1)}>-</button>
        <div>{value}</div>
        <button onClick={()=> setValue(value+1)}>+</button>
      </div>
   
    </div>
  );
}

export default App;
