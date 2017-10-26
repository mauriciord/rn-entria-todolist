'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  filter
} from 'reducers/filter/action-creators'
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from 'reducers/filter/actions'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #ECF0F1;
  padding: 1em;
  margin: 1.2em 1.6em;
  border-radius: 6px;
`

const BtnFilter = styled.a`
  background: #127FAA;
  border: 1px solid #287591;
  color: #FFFFFF;
  padding: 0.25em 1em;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    background: #287591;
    border: 1px solid  #127FAA;
    color: #e4e4e4;
  }
`

const Filter = ({ handleFilter }) => (
  <Container>
    <BtnFilter onClick={handleFilter(SHOW_ALL)}>Show All</BtnFilter>
    <BtnFilter onClick={handleFilter(SHOW_COMPLETED)}>Show Completed</BtnFilter>
    <BtnFilter onClick={handleFilter(SHOW_ACTIVE)}>Show Active</BtnFilter>
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
