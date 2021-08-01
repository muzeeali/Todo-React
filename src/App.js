import './App.css';
import Header from './components/Header';
import React, { useState } from 'react';

function App() {



  const [iValue, setValue] = useState("");
  const [item, setItem] = useState([]);

  const setVal = () => {
    setItem(() => {
      return ([...item, iValue]);
      
    });
    setValue("");
  };
  const deleteItem = (i) => {
    setItem((old) => {
      return old.filter((item,id)=>{
return i !== id;
      });
      
    }); 
   }

 const deleteAll = () => {
 setItem(()=>{
   return []
 });
}

const edit = (index) => {
  const newVal = prompt("Enter");

  setItem(() => {
    item[index]=newVal
    return ([...item]);
    
  });
}

  return (
    <div className='main'>
      <Header />
      <form>
        <input value={iValue} onChange={e => setValue(e.target.value)} type="text" />
      </form>
      <button onClick={setVal} >ADD</button>
      <button onClick={deleteAll}>DELETE ALL</button>
      <div  id='ui'>
      <ul>
        {item.map((val, i) => {
          return <li key={i} >  {val} <span className='btn'><button   onClick={()=>deleteItem(i)}>DELETE</button>
          <button   onClick={()=>edit(i)}>UPDATE</button></span> 
          </li>
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;
