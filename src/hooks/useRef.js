import React from "react";
import { useRef } from "react";

function UseRef(){
    const txtTitle=useRef();
    const hexColor=useRef();

    console.log(txtTitle);
    const submit=(e)=>{
        e.preventDefault();
        const title =txtTitle.current.value;
        const color=hexColor.current.value;
        alert(`${title},${color}`);
        txtTitle.current.value="";
        hexColor.current.value="";
    };
return(
    <form onSubmit={submit}>
        <input ref ={txtTitle}
        type="text"
        placeholder="color title"
        />
        
        <input ref={hexColor}type="color"/>
        <button>Add</button>
    </form>
);
}
export default UseRef;