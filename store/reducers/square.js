import * as actionTypes from '../actions'
const initState = {
    results:[]
}
const reducer = (state = initState, action) => {
    if (action.type === actionTypes.ADD_SQUARE){
        return{
            ...state,
            results:state.results.concat(action.value*action.value)
        }
    }
    if (action.type === actionTypes.DELETE_SQUARE){
        return{
            ...state,
            results:state.results.filter((_,i)=>i!==action.value)
        }
    }


    return state;
}
export default reducer;