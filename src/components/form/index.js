'use strict'

import React, { Component } from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native'
import { connect } from 'react-redux'
import {
  addTodo
} from '../../redux-flow/reducers/todo/action-creators'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
`

const FormText = styled.TextInput`
  flex: 1;
  height: 42px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #D6D9DC;
  padding: 8px;
  border-radius: 4px;
`

class Form extends Component {
  state = {
    todoText: ''
  }

  render () {
    const { handleAddTodo } = this.props

    return (
      <Container>
        <FormText
          onSubmitEditing={() => {
            handleAddTodo(this.state.todoText)
            this.setState({ todoText: '' })
          }}
          onChangeText={(text) => this.setState({ todoText: text })}
          placeholder='Ex.: Comprar pão'
          value={this.state.todoText}
        />
      </Container>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(Form)
