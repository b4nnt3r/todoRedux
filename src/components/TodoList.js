import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, createTodo }) => {
  let whatICallInput
  return (
  <div>
    <form onSubmit={(e) => {
      e.preventDefault()
      createTodo(whatICallInput.value)
    }}>
      <input ref={thisThing => whatICallInput = thisThing}/>
    </form>
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))}
    </ul>
  </div>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      complete: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
}

export default TodoList
