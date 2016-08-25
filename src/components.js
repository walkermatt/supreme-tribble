import React from 'react';
import * as R from 'ramda';

export function Todo(props) {
    const { todo } = props;
    if(todo.isDone) {
        return <strike>{todo.text}</strike>;
    } else {
        return <span>{todo.text}</span>;
    }
}

export function TodoStats(props) {
    const { todos } = props;
    const isDoneCount = R.countBy(R.prop('isDone'), todos);
    return (
        <p className='todo__stats'>
            Done: { R.defaultTo(0, isDoneCount[true]) }, Todo: { R.defaultTo(0, isDoneCount[false]) }
        </p>
    )
}

export function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;

    const onKeyDown = event => {
        // Key is enter and some text
        const input = event.target;
        if (event.which == 13 && input.value.length > 0) {
            addTodo(input.value);
            input.value = '';
        }
    };

    const toggleClick = id => event => toggleTodo(id);

    return (
        <div className='todo'>
        <input type='text' placeholder='Add todo' onKeyDown={onKeyDown} />
        <ul className='todo__list'>
        {todos.map(t => (
            <li key={t.id} className='todo__item' onClick={toggleClick(t.id)}>
            <Todo todo={t} />
            </li>
        ))}
        </ul>
        <TodoStats todos={todos} />
        </div>
    );
}
