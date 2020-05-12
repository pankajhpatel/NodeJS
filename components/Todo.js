
import React from 'react';
import './product.css';

function Todo(prop){
    return(
      <div className = "prod">
        <h1>Id:{prop.id}</h1>
        <h1>User Id:{prop.uid}</h1>
        <h1>Completed:{prop.stauts}</h1>
        <p>Title:{prop.title}</p> 
      </div> 
     )
}

export default Todo;