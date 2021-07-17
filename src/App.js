
import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {



  const [Ivalue,setValue]=useState("");
  const [item,setItem]=useState([]);

  const setVal=()=>{
    setItem((old)=>{
      return( [...old,Ivalue]);
    });
  };

  return (
  
    <div >
  
<Header/>
      <form> 
        <label>NEW TODO</label>
       <input value={Ivalue}  onChange={e => setValue(e.target.value)} type="text"></input>
       <button onClick={setVal} type="submit">ADD</button>
     
       </form>
<ul>
  
     {item.map((itemVal) =>
    {
return <li >{itemVal}</li>
    })}
  
</ul>
    </div>
  );
}

export default App;
