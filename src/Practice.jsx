import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from './Login';
import Dashboard from './Dashboard';

const App = ()=>{
  return(
    <>
    <Switch>
      <Route path='/' component={Login} />
      <Route path='./dashboard' component= {Dashboard}/>
    </Switch>
    {/* <Login/>
    <Dashboard/> */}
  </>
  );
  
};
export default App;


//index.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import "./index.css";

ReactDOM.render(
<BrowserRouter> 
<App />
</BrowserRouter>
,document.getElementById('root'));


