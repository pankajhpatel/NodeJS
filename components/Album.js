
import React from 'react';
import './product.css';

function Album(prop){
    return(
      <div className = "prod">
        <h1>Id:{prop.id}</h1>
        <h1>User Id:{prop.uid}</h1>
        <p>Title:{prop.title}</p> 
      </div> 
     )
}

export default Album;