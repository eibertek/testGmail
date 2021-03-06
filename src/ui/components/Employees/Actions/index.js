export const loadEmployees = (payload = []) => {
  return {type:'SHOW', payload };
}

export const add_employee_save_pending = () => {
  return { type:'ADD_STATUS_PENDING', status:'ADD_STATUS_PENDING' }
}
export const add_employee_success = () => {
  return { type:'ADD_STATUS_SUCCESS', status:'ADD_STATUS_SUCCESS' }
}

/* MOdify employee actions */
export const modify_employee_load = (employee) => {
  return { type:'MODIFY_EMPLOYEE_PENDING', status:'MODIFY_EMPLOYEE_PENDING', employeeData: employee}
}
const modify_employee_save = () => {}
const modify_employee_success = () => {
  return { type:'MODIFY_EMPLOYEE_SUCCESS', status:'MODIFY_EMPLOYEE_SUCCESS', employeeData: employee}  
}

export const modify_employee_cancel = () => {
  return { type:'MODIFY_EMPLOYEE_CANCEL', status:'MODIFY_EMPLOYEE_CANCEL'}  
}

/* delete employee actions */
export const delete_employee_pending = (employee) => {
  return { type:'DELETE_EMPLOYEE_PENDING', status:'DELETE_EMPLOYEE_PENDING', employeeData: employee}
}
export const delete_employee_success = () => {
  return { type:'DELETE_EMPLOYEE_SUCCESS', status:'DELETE_EMPLOYEE_SUCCESS', employeeData: {}}  
}
