import * as R from 'ramda';

const init = [];
// const init = {initialised: true, todos: []};

export default function(todos=init, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TODO':
            return R.append(action.payload, todos);
        case 'ADD_TODOS':
            return R.clone(action.payload);
        case 'TOGGLE_TODO':
            return R.map(t => (t.id === action.payload) ? R.evolve({isDone: R.not}, t) : t, todos);
        default:
            console.warn('No case for action: ' + action.type);
            return todos;
    }
}
