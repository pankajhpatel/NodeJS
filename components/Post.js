
import React from 'react';
import './product.css';

function Post(prop){
    return(
      <div className = "prod">
        <h1>Id:{prop.id}</h1>
        <h1>User Id:{prop.uid}</h1>
        <p>Title:{prop.title}</p> 
        <p>Body:{prop.body}</p> 
      </div> 
     )
}

export default Post;