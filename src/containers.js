import { connect } from 'react-redux';
import * as components from './components';
import { addTodo, toggleTodo } from './actions';

export const TodoList = connect(
    function mapStateToProps(state) {
        // console.log(mapStateToProps, state);
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        // console.log(mapDispatchToProps, dispatch);
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(components.TodoList);
