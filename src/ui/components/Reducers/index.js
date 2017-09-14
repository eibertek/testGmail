import { combineReducers } from 'redux'
import employees from '../Employees/Reducers';

const todoApp = combineReducers({
  employees
})

export default todoApp