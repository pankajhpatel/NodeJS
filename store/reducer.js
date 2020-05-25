import * as actionTypes from './actions'
const initState = {
    counter: 1,results:[]
}
const reducer = (state = initState, action) => {
    if (action.type === actionTypes.INCR) {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === actionTypes.DECR) {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === actionTypes.ADD) {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === actionTypes.SUB ) {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    if (action.type === actionTypes.ADD_SQUARE){
        return{
            ...state,
            results:state.results.concat(state.counter*state.counter)
        }
    }
    if (action.type === actionTypes.DELETE_SQUARE){
          /*  console.log("DELETE ON LIST"+action.value);  
            let memps = state.results;
            memps.splice(action.value,1);
            state.results=memps;
            console.log(state.results);*/
        return{
            ...state,
            results:state.results.filter((_,i)=>i!==action.value)
        }
    }


    return state;
}
export default reducer;