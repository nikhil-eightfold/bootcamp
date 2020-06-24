const {createStore} = require('redux');

let initialState = {
    age : 1,
};

let reducer= (state=initialState,action) => {
   let newState = {...initialState};

    if(action.type === 'add' ){
        newState.age += 1;
    }
    if(action.type === 'subtract' ){
        newState.age -= 1;
    }
    return newState
};


let store = createStore(reducer);

store.subscribe(() => {
   console.log('app state is :' + JSON.stringify(store.getState()))
});

store.dispatch({type:'add'});
store.dispatch({type:'subtract'});
