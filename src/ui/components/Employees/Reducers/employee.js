export const employee = (state = {employeeData:{}}, action) => {
  switch (action.type) {
     case 'MODIFY_EMPLOYEE_PENDING':
      return { status:action.status, employeeData: action.employeeData }  
    default:
      return state
  }
}
