import React from 'react';
import './product.css';

function Employee(prop){
    return(
      <div className = "prod">
        <h1>Emp No:{prop.eno}</h1>
        <h1>Emp name:{prop.ename}</h1>
        <h1>Salary:{prop.salary}</h1> 
        <button onClick={prop.click}>Delete</button>&nbsp;&nbsp;
        <button onClick={prop.incrclick}>Incr</button>&nbsp;&nbsp;
        <button onClick={prop.decrclick}>Decr</button>
        
      </div> 
     )
}

export default Employee;