export const loadEmployees = (payload = []) => {
  return {type:'SHOW', payload };
   /*payload:[
    {
      "id": "meiberman05121984",
      "name": "Mariano",
      "lastname": "Eiberman",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },
    {
      "id": "meiberman045131",
      "name": "Mariano",
      "lastname": "Furriel",
      "birthday": "05/11/1944",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },
    {
      "id": "meiberman04587184",
      "name": "Daniel",
      "lastname": "Mata",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },    
    {
      "id": "meiberman04587184",
      "name": "Emanuel",
      "lastname": "Suriano",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },        
    {
      "id": "meiberman04587184",
      "name": "Marcos",
      "lastname": "Marcos",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },        
    {
      "id": "meiberman04587184",
      "name": "Maxi",
      "lastname": "Cespedes",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },        
    {
      "id": "meiberman04587184",
      "name": "Jose Daniel",
      "lastname": "Sanchez",
      "birthday": "05/12/1984",
      "proyect": "Intelligize",
      "startDay": "07/08/2017",
      "picture": ""
    },        
  ]*/
}

//dentro del componente tengo que hacer el fetch, y enviar las acciones desde el connect para poder pasar la info al sistema
export const addEmployee = data => {

}