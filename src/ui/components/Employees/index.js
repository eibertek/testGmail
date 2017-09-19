//import hypergrid from 'fin-hypergrid';
import fetch from 'isomorphic-fetch';
//import styles from './styles.scss';
class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
        this.loadme = this.loadme.bind(this);
        this.list = this.list.bind(this);
        fetch('http://localhost:3000/employees/').then((fetchedData)=>{
                return fetchedData.json();
            }).then((data)=>{
                this.props.load(data);
            });          
    }

    list(){
        if(!this.props.employees.payload ) return <div>Loading</div>;
        const content = this.props.employees.payload.map((employee) => (
            <tr>
                <td>{employee.name}</td>
                <td>{employee.lastname}</td>
                <td>{employee.birthday}</td>
                <td>{employee.startDay}</td>
            </tr>
        ));
        return <table className="table" styles={{ border: "1px solid white"}}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>birthday</th>
                        <th>start day</th>
                    </tr>
                </thead><tbody>{content}</tbody></table>;
    }

    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    componentDidUpdate(){
        console.log('LOADME');
    }

    componentDidMount() {

    }

    loadme() {
        this.props.employees.payload.push( {
            "id": "meiberman05121984",
            "name": "Mariano",
            "lastname": "Furriel",
            "birthday": "05/12/1984",
            "proyect": "Intelligize",
            "startDay": "07/08/2017",
            "picture": ""
          });
        this.props.load(this.props.employees.payload);        
    }

    render() {
       return <div className="container">
       {this.list()}
       <button onClick={this.loadme}>LOAD ME</button>
       </div>   
    }
} 

export default Employees;
