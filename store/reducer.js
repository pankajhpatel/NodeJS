const initState = {
    counter: 104
}
const reducer = (state = initState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'DEC') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUB') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    return state;
}
export default reducer;