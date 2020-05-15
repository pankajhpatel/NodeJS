import React from 'react';
import './displaycounter.css'

const DisplayCounter=(props)=>{
    return(
        <div className="displaycounter">
            Counter:{props.value}
        </div>
    )
}
export default DisplayCounter;