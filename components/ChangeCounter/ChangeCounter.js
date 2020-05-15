
import React from 'react';
import './changecounter.css';

const ChangeCounter=(props)=>{
    return(
        <div onClick={props.click} className="changecounter">
           {props.caption}    
        </div>
    )
}
export default ChangeCounter;