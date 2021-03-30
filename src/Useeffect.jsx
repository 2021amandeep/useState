//index

import React from  'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'));


//App

import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  // const state= setState();

  const [num,setNum] = useState(0);
  const [nums,setNums] = useState(0);

  useEffect(()=>{
    alert("I am clicked");},
    [num]);

  return(
    <>
    <button onClick={()=>{setNum(num+1);
    }}>Click me {num}</button>
    <button onClick={()=>{setNums(nums+1);
    }}>Click me {nums}</button>
    </>
  )
}

export default App;

