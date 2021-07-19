
import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {



  const [iValue,setValue]=useState("");
  const [item,setItem]=useState([]);

  const setVal=()=>{
    setItem(()=>{
      return( [...item,iValue]);
    });
    // console.log(iValue)
  };

  return (
  
    <div >
  
<Header/>

       <form>
         <input  value={iValue}  onChange={e => setValue(e.target.value)} type="text"/>
      
       </form>
       <button onClick={setVal} >ADD</button>
<ul>
  
     {item.map((setItem,i) =>
    {
return <li key={i} >{setItem}</li>
    })}
  
</ul>

    </div>
  );
}

export default App;
