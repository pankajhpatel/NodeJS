const redux = require('redux');
const createStore = redux.createStore;

const initState = {
    counter: 0
}
const rootReducer = (state = initState, action) => {
    if (action.type === 'INC') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'DEC') {
        return {
            ...state,
            counter: state.counter - 1
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
const store = createStore(rootReducer);
console.log(store.getState());
store.dispatch({ type: 'INC' })
console.log(store.getState());
store.dispatch({ type: 'ADD', value: 5 })
console.log(store.getState());
store.dispatch({ type: 'DEC'})
console.log(store.getState());
store.dispatch({ type: 'SUB', value: 5 })
console.log(store.getState());
