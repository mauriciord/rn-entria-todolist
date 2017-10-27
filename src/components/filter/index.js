'use strict'

import React from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { TouchableHighlight } from 'react-native'
import {
  filter
} from '../../redux-flow/reducers/filter/action-creators'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from '../../redux-flow/reducers/filter/actions'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background: #ECF0F1;
  padding: 10px;
  margin: 14px 16px;
  border-radius: 6px;
`

const BtnFilter = styled.Text`
  color: #736BD4;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
`

const Filter = ({ handleFilter }) => (
  <Container>
    <TouchableHighlight onPress={handleFilter(SHOW_ALL)}>
      <BtnFilter>Show All</BtnFilter>
    </TouchableHighlight>
    <TouchableHighlight onPress={handleFilter(SHOW_COMPLETED)}>
      <BtnFilter>Show Completed</BtnFilter>
    </TouchableHighlight>
    <TouchableHighlight onPress={handleFilter(SHOW_ACTIVE)}>
      <BtnFilter>Show Active</BtnFilter>
    </TouchableHighlight>
  </Container>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleFilter: (filterOpt) => (e) => {
      e.preventDefault()
      dispatch(filter(filterOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Filter)
