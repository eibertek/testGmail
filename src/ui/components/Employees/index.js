//import hypergrid from 'fin-hypergrid';
import styles from './styles.scss';
import {getEmployees, DeleteEmployee} from '../../utils/fetchHelper';
class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
        this.list = this.list.bind(this);
        getEmployees( this.props.load);
    }

    list(){
        if(!this.props.employees.payload ) return <div>Loading</div>;
        let c= 0;
        const content = this.props.employees.payload.map((employee) => (
            <tr key={c++}>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.birthday}</td>
                <td>{employee.startDay}</td>
                <td><img src={employee.picture} width="60px" height="60px" /></td>
                <td>
                    <button onClick={(evt) => this.newEmployee(evt, employee)}>Modificar</button>
                    <button onClick={(evt) => this.deleteEmployee(evt, employee)}>Eliminar</button>                    
                </td>
            </tr>
        ));
        return <table className="table">
                <thead>
                    <tr >
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>birthday</th>
                        <th>start day</th>
                    </tr>
                </thead><tbody>{content}</tbody></table>;
    }

    newEmployee(evt, data) {
        this.props.load_employee_data(data);
    }

    deleteEmployee(evt, data) {
          this.props.delete_employee(data);
          DeleteEmployee((result)=>{ 
                    this.props.delete_employee_success(result); 
                    getEmployees( this.props.load); 
                    console.log(result)}, data);
      }
  
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    render() {
       return <div className="container">
       {this.list()}
       </div>   
    }
} 

export default Employees;
