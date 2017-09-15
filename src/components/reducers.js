import {
  VisibilityFilters,
  SET_VISIBILITY_FILTER,
  ADD_TODO,
  TOGGLE_TODO
} from './actions'
import { combineReducers } from 'redux';

const todos = (previousState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      {
        const newTodoObject = {
          text: action.text,
          complete: false,
          id: previousState.length
        }
        return [...previousState, newTodoObject] //the old list plus the new one
      }
    case TOGGLE_TODO:
      {
        console.log('inside the case', previousState);

        // one todo should have its completeness changed, the others should be left alone
        return previousState.map((todo, index) => {
          if (index === action.index) {
            return { ...todo,
              complete: !todo.complete
            }
          }
          return todo
        })
      }
      default:
        return previousState
  }
}

const visibilityFilter = (previousState = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return previousState
  }
}
// const reducer = (previousState = initialState, action) => {
//     return {
//       todos: todo(previousState.todos, action),
//       visibilityFilter: visibilityFilter(previousState.visibilityFilter, action)
//   }
// }


const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
