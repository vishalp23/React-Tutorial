import React from "react";
import { useReducer } from "react";

function UseReducer(){
    const [checked,setChecked]=useReducer(
        (checked)=>!checked,
        false
    
    );
    return(
        <div>
            <input 
                type="checkbox" 
                value={checked} 
                onChange={setChecked}
            />
            <label>
                {checked?"Ckecked":"not Checked"}
            </label>
        </div>


    );
}
export default UseReducer;