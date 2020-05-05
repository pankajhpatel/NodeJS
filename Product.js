import React from 'react';
import './product.css';

function Product(prop){
    return(
      <div className = "prod">
        <h1>Product:{prop.pname}</h1>
        <h1>Price:{prop.price}</h1> 
      </div> 
     )
}

export default Product;