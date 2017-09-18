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
const modify_employee_load = () => {}
const modify_employee_save = () => {}
const modify_employee_success = () => {}

/* delete employee actions */
const delete_employee_load = () => {}
const delete_employee_success = () => {}
