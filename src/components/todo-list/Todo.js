import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`

const CheckContainer = styled.TouchableHighlight`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CheckText = styled.Text`
  font-size: 20px;
`

const TextContainer = styled.TouchableHighlight`
  flex: 10;
  padding: 5px 15px 5px 20px;
  border-left-color: #cdf6f7;
  border-left-width: 1px;
  margin-left: 10px;
`

const TodoText = styled.Text`
  font-size: 20px;
  text-decoration-line: ${props => props.completed ? 'line-through' : 'none'};
`

const BtnContainer = styled.TouchableHighlight`
  flex: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BtnDelete = styled.Text`
  background: #f32929;
  color: #FFFFFF;
  font-weight: bold;
  border-radius: 4px;
  padding: 10px;
`

const Todo = ({ handleToggleTodo, handleDelTodo, completed, id, text }) => (
  <Container>
    <CheckContainer onPress={handleToggleTodo(id)}>
      <View>
        {!!completed && <CheckText>✔</CheckText>}
      </View>
    </CheckContainer>
    <TextContainer onPress={handleToggleTodo(id)}>

        <TodoText completed={completed}>
          {text}
        </TodoText>

    </TextContainer>
    <BtnContainer onPress={handleDelTodo(id)}>
      <BtnDelete onPress={handleDelTodo(id)}>
        X
      </BtnDelete>
    </BtnContainer>
  </Container>
)

export default Todo