import React, { useState } from "react";
import Form from "./Form";

function App() {
  const admin = {
    email: "amandeep.p.2015@gmail.com",
    password: "12345",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (data) => {
    console.log(data);

    if (data.email == admin.email && data.password == admin.password) {
      console.log("Logged In");
      setUser({
        name: data.name,
        email: data.email,
      });
    } else {
      console.log("Error");
      setError("Invalid Details!");
    }
  };

  const Logout = () => {
    // console.log("Logout");
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            Welcome,<span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Form Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;


//index

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//index.css


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background:#c8c8c8;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  }
  
  input {
    background: none;
    border: none;
    outline: none;
    appearance: none;
  }
  button {
    background: none;
    border: none;
    outline: none;
    appearance: none;
  }
  
  .App {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgba(8, 8, 8, 0.603); */
    background-image: url("https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg");
  }
  
  form {
    display: block;
    position: relative;
    border-radius: 20px;
  }
  /* form:after {
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    left: -7px;
    right: -7px;
    bottom: -7px;
    z-index: 1;
    background-image: url("https://images.iphonephotographyschool.com/22682/How-To-Blur-Background-On-iPhone.jpg")
  } */
  
  form .form1 {
    position: relative;
    display: block;
    /* background-color: rgb(31, 184, 64); */
    background-image: url("data:image/jpeg;base64,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");
    padding: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 2;
  }
  
  form .form1 h2 {
    color: #1f1c13;
    font-size: 30px;
    /* font-style: italic; */
    font-weight: 500;
    margin-bottom: 30px;
    background: none;
  }
  
  form .form1 .form2 {
    display: block;
    width: 300px;
    margin-bottom: 18px;
    background: none;
  }
  form .form1 .form2 label {
    display: block;
    color: rgb(27, 31, 24);
    font-size: 15px;
    margin-bottom: 6px;
    transition: 0.3s;
    background: none;
  }
  input#password{
    background-color: rgb(204, 183, 183);
    color: #fff;
  }
  
  .form1 .form2:focus-within label {
    color: chocolate;
  }
  
  form .form1 .form2 input {
    display: block;
    width: 100%;
    padding: 10px 15px;
    background-color:rgb(192, 207, 207);
    border-radius: 10px;
    transition: 0.5s;
  }
  
  form .form1 .form2 input:focus {
    box-shadow: 0px 0px 4px rgba(231, 147, 147, 0.2);
  }
  
  
  form .form1 input[type="submit"]{
    display: inline-block;
    padding: 12px 14px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#07c22f 50%,#2579da 50%,#161515);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  form .form1 input[type="submit"]:hover{
    background-position: 100% 0%;
  }
  .welcome button{
    display: inline-block;
    padding: 12px 14px;
    border-radius: 10px;
    background-image: linear-gradient(to right,#07c22f 50%,#2579da 50%,#161515);
    background-size: 200%;
    background-position: 0%;
    transition: 0.4s;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
  }
  .welcome button:hover{
    background-position: 100% 0%;
  }