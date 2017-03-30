var redux = require('redux');

console.log("Starting redux example");

var stateDefault = {name: 'Anonymous', hobbies: []};

var nextHobbyId = 1;


var hobbiesReducer = (state = [], action) => {

    switch (action.type) {
        case 'ADD_HOBBY':
            return [...state, {id: nextHobbyId++, hobby: action.hobby}];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id != action.id);
        default:
            return state
    }
};

var nameReducer = (state = 'Anonymous', action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state
    }
};


var reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbiesReducer

});

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
    var state = store.getState();

    console.log("state changed", state);
    document.getElementById('app').innerHTML = state.name;
});


var action = {
    type: 'CHANGE_NAME',
    name: 'Andrew'
};

store.dispatch(action);


store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Walking'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: '2'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Gunter'
});

