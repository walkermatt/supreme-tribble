import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { TodoList } from './containers';
import reducer from './reducer';

const store = createStore(
  reducer
);

render(
    <Provider store={store}>
        <TodoList />
    </Provider>,
    document.getElementById('app')
);

fetch('./todos.json').then(function(response) {
    return response.json().then(function(json) {
        store.dispatch({type: 'ADD_TODOS', payload: json});
    })
});
