import * as actionTypes from '../actions'
const initState = {
    factresults:[]
}

const factorial=(n)=>{
    let fac=1;
    for(let i=1;i<=n; i++)
    {
    fac= fac*i;
    }
    return fac;
  } 

const reducer = (state = initState, action) => {
    if (action.type === actionTypes.ADD_FACTORIAL){
        return{
            ...state,
            factresults:state.factresults.concat(factorial(action.value))
        }
    }
    if (action.type === actionTypes.DELETE_FACTORIAL){
        return{
            ...state,
            factresults:state.factresults.filter((_,i)=>i!==action.value)
        }
    }


    return state;
}
export default reducer;