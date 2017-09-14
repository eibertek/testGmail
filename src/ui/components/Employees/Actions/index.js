export const loadEmployees = (payload = []) => {
  return {type:'SHOW', payload };
}

//dentro del componente tengo que hacer el fetch, y enviar las acciones desde el connect para poder pasar la info al sistema
export const addEmployee = data => {

}