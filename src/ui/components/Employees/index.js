import hypergrid from 'fin-hypergrid';

class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
    }
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    employeeList() {
      const List = [{name:'a'},{name:'b'},{name:'c'},{name:'d'}];
      return List.map((item) => <div>{item.name}</div>);
    }

    componentDidMount() {
        //Aqui agregar el fetch y luego dispatch la accion correspondiente
        if(this.props.employees.length === 0) this.props.load([
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
          ]);
        var grid = new hypergrid('#grid1',  {
             data: this.props.employees
         })
    }

    render() {
       return <div style={{backgroundColor:"white"}} id="grid1"></div>   
    }
} 

export default Employees;
