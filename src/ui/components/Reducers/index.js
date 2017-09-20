import { combineReducers } from 'redux'
import {employees} from '../Employees/Reducers/employees.js';
import {employee} from '../Employees/Reducers/employee.js';

const reducers = combineReducers({
  employees,
  employee
})

export default reducers