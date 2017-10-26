'use strict'

import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { Text, TouchableHighlight, FlatList } from 'react-native'
import {
  toggleTodo,
  delTodo
} from '../../redux-flow/reducers/todo/action-creators'
import { todosFilter } from '../../utils/visibilityFilter'
import { sorterFilter } from '../../utils/sorterFilter'
import Todo from './Todo'

const StyledFlatList = styled.FlatList`
  flex:1;
  flex-direction: row;
`

class TodoList extends Component {
  keyExtractor = (item, index) => index

  render () {
    const { todos, filters, sorters, handleToggleTodo, handleDelTodo } = this.props
    const filteredTodos = todosFilter(
      sorterFilter(todos, sorters),
      filters
    )

    return (
      <FlatList 
        data={filteredTodos}
        keyExtractor={this.keyExtractor}
        renderItem={({ item }) => (
          <Todo 
            handleToggleTodo={handleToggleTodo}
            handleDelTodo={handleDelTodo}
            {...item}
            />
        )}
      />
    )
  }
}

const mapStateToProps = ({ todos, filters, sorters }) => {
  return {
    todos,
    filters,
    sorters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(toggleTodo(todoId))
    },
    handleDelTodo: (todoId) => (e) => {
      e.preventDefault()
      dispatch(delTodo(todoId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
