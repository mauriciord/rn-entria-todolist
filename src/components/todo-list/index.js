'use strict'

import React, { Component } from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { FlatList, View } from 'react-native'
import {
  toggleTodo,
  delTodo
} from '../../redux-flow/reducers/todo/action-creators'
import { todosFilter } from '../../utils/visibilityFilter'
import { sorterFilter } from '../../utils/sorterFilter'
import Todo from './Todo'

const StyledScroll = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 100%;
`

class TodoList extends Component {
  keyExtractor = (item, index) => index

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#cdf6f7"
        }}
      />
    );
  }

  render () {
    const { todos, filters, sorters, handleToggleTodo, handleDelTodo } = this.props
    const filteredTodos = todosFilter(
      sorterFilter(todos, sorters),
      filters
    )

    return (
      <StyledScroll>
        <FlatList 
          style={{ flex: 1 }}
          data={filteredTodos}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={({ item }) => (
            <Todo 
              handleToggleTodo={handleToggleTodo}
              handleDelTodo={handleDelTodo}
              {...item}
              />
          )}
        />
      </StyledScroll>
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
