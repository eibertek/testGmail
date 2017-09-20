export const employees = (state = [], action) => {
  switch (action.type) {
    case 'SHOW':
      return { payload:action.payload}
    case 'ADD_STATUS_PENDING':
      return { status:action.status }
    case 'ADD_STATUS_SUCCESS':
      return { status:action.status }
    default:
      return state
  }
}