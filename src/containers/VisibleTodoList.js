import { connect } from 'react-redux';
import { toggleTodo, addTodo, setVisibilityFilter, VisibilityFilters } from '../components/actions';
import TodoList from '../components/TodoList';


const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETE':
      return todos.filter(t => t.complete)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.complete)
    default:
      return todos
  }
}

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      console.log('id is:', id);
      dispatch(toggleTodo(id))
    },
    createTodo: (text) => {
    dispatch(addTodo(text))},
    showIncompletes: () => {
      dispatch(setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList
