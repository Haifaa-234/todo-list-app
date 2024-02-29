
import { useRef, useState } from 'react';
import './App.css';

function App() {
const [x,setx] =useState([])
const inputRef=useRef()

const add= ()=>{
  const value=inputRef.current.value
  const newData={completed:false,value}
  setx ([...x,newData])
  inputRef.current.value=""
}

const itemDone=(index) =>{
  const newx=[...x]
  x[index].completed=!x[index].completed
  setx(newx)
}


const toDelete=(index) =>{
  const newx=[...x]
  newx.splice(index)
  setx(newx)
}

  return (
    <div className="App">
       <h2>To do list</h2>

       <ul>
          {
            x.map(({value,completed},index)=>{
              return (
                <div>
              <li className={completed?"diffrent":""}  onClick={()=> itemDone(index)}>{value}</li>
              <span >
                <button className='btn1' onClick={toDelete}>X</button>
              </span>
              </div>
              )
            }
            
            )
          }
       </ul>
       <input ref={inputRef} placeholder='Enter your task....'/>
       <button className='btn2' onClick={add}>  Add</button>
    </div>
  );
}

export default App;
