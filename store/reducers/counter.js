import * as actionTypes from '../actions'
const initState = {
    counter: 1
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
    return state;
}
export default reducer;