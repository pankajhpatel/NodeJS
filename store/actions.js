export const INCR='INCR';
export const DECR='DECR';
export const ADD='ADD';
export const SUB='SUB';
export const ADD_SQUARE='ADD_SQUARE';
export const DELETE_SQUARE='DELETE_SQUARE';
export const ADD_FACTORIAL='ADD_FACTORIAL';
export const DELETE_FACTORIAL='DELETE_FACTORIAL';

export const increment = () => {
    return{
        type:INCR
    }
}


export const decrement = () => {
    return{
        type:DECR
    }
}

export const addition = () => {
    return{
        type:ADD,value:5
    }
}

export const subtraction = () => {
    return{
        type:SUB,value:5
    }
}



export const saveSquare = (i)=>{
    return{
        type: ADD_SQUARE,
        value: i
    }
}
//thunk middleware is used to get dispatch method
//which is used to make Async call (setTimeout) 
export const addSquare=(counter)=>{
    return dispatch=>{
        setTimeout(()=>{
            dispatch(saveSquare(counter));
        },2000);
    }
}

export const deletesquare = (i)=>{
    return{
        type: DELETE_SQUARE,
        value: i
    }
}

export const addFactorial = (i)=>{
    return{
        type: ADD_FACTORIAL,
        value: i
    }
}

export const deleteFactorial = (i)=>{
    return{
        type: DELETE_FACTORIAL,
        value: i
    }
}

