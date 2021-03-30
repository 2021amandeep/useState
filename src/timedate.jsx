import React from "react";
import ReactDOM from 'react-dom';
import "./index.css";

const name = "Amandeep";

let time = new Date();
time=time.getHours();
let greeting='';
const cssStyle={};

if (time>=1 && time <12)
{
  greeting= "Good Morning";
  cssStyle.color= 'green';
}
else if(time>=12 && time<19)
{
  greeting= "Good evening";
  cssStyle.color= 'orange';
}
else{
  greeting="Good night";
  cssStyle.color= 'yellow';
}

 
ReactDOM.render(
    <div>
      <h1>Hello sir, <span style= {cssStyle}> {greeting}</span></h1>
    </div>
  ,
  document.getElementById("root")
)




//css



// body{
//     background-color: #b4f2e1;
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
// }
// div{
//    width: 100%;
//    height: 100vh;
//    display: flex;
//    justify-content: center;
//    align-items: center;
// }
// div h1{
//     background-color: azure;
//     border-radius: 20px;
//     padding: 10px;
// }