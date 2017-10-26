'use strict'

import { orderBy } from 'lodash'
import {
  SHOW_RECENTS,
  SHOW_OLDER
} from '../redux-flow/reducers/sorter/actions'

export const sorterFilter = (todos, sorterFilter) => {
  switch (sorterFilter) {
    case SHOW_RECENTS:
      return orderBy(todos, 'created', 'desc')
    case SHOW_OLDER:
      return orderBy(todos, 'created', 'asc')
  }
}
