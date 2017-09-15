import hypergrid from 'fin-hypergrid';
import fetch from 'isomorphic-fetch';
class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
        if(props.employees.length===0) {
          fetch('http://localhost:3000/employees/').then((fetchedData)=>{
              return fetchedData.json();
          }).then((data)=>{
              props.load(data);
          });          
        }
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
        var grid = new hypergrid('#grid1',  {
             data: this.props.employees
         })
    }

    render() {
       return <div style={{backgroundColor:"white"}} id="grid1"></div>   
    }
} 

export default Employees;
