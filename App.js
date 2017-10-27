/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styled from 'styled-components/native';
import Form from './src/components/form';
import Sorter from './src/components/sorter';
import Filter from './src/components/filter';
import TodoList from './src/components/todo-list';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const StyledApp = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export default class App extends Component<{}> {
  render() {
    return (
      <StyledApp>
        <Form />
        <Sorter />
        <TodoList />
        <Filter />
      </StyledApp>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
