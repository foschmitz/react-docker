var redux = require('redux');

console.log("Starting redux example");

// Name reducer and action generators
// ----------------------------------

var nameReducer = (state = 'Anonymous', action) => {

    switch (action.type) {
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state
    }
};

var changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
}

// Hobbies reducer and action generators
// ----------------------------------

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

var addHobby = (hobby) => {
    return {
        type: 'ADD_HOBBY',
        hobby
    }
}

var removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}


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

store.dispatch(changeName("Andrew"));
store.dispatch(addHobby("Running"));
store.dispatch(addHobby("Walking"));
store.dispatch(removeHobby(2));
store.dispatch(changeName("Gunter"));

