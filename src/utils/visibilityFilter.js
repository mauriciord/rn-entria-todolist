'use strict'

import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../redux-flow/reducers/filter/actions'

export const todosFilter = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case SHOW_ALL:
      return todos
    case SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
  }
}
