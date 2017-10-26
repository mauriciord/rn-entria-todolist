'use strict'

import React from 'react'
import styled from 'styled-components/native'
import { connect } from 'react-redux'
import { TouchableHighlight } from 'react-native'
import {
  sort
} from '../../redux-flow/reducers/sorter/action-creators'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from '../../redux-flow/reducers/sorter/actions'

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

const Sorter = ({ handleSorter }) => (
  <Container>
    <TouchableHighlight onPress={handleSorter(SHOW_RECENTS)}>
      <BtnFilter>Show Most Recent</BtnFilter>
    </TouchableHighlight>
    <TouchableHighlight onPress={handleSorter(SHOW_OLDER)}>
      <BtnFilter>Show Older</BtnFilter>
    </TouchableHighlight>
  </Container>
)

const mapDispatchToProps = (dispatch) => {
  return {
    handleSorter: (sortOpt) => (e) => {
      e.preventDefault()
      dispatch(sort(sortOpt))
    }
  }
}

export default connect(null, mapDispatchToProps)(Sorter)
