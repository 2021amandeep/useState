//index

import React from  'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App/>,document.getElementById('root'));

//App

import React, { useState } from 'react';



const App = () => {
  const state = useState();

  const [count, setCount] = useState(0);


  const IncNum = () => {
    setCount(count + 1);
    console.log('clicked')
  };
  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={IncNum}>Click Me</button>
      </div>
    </>
  );
};

export default App;

//css

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #d2dbdd;
}
div{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
button{
    padding: 15px 20px;
    background-color: cornflowerblue;
    color: white;
    border: 2px solid #ecf0f1;
    outline: none;
    border-radius: 5px;
    text-transform: uppercase;
    cursor: pointer;
}