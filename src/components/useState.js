import React from "react";
import { useState } from "react";

function UseState(){

const [emotion,setEmotion]=useState("happy");
  
  return (
    <div className="App">
      
       <h1>My emotion is {emotion}</h1>
       <button onClick={()=>setEmotion("sad")}>
        Sad
       </button>

       <button onClick={()=>setEmotion("Exicited")}>
        Exicited 
       </button>
      
    </div>
  );

}

export default UseState;