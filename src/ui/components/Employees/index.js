//import hypergrid from 'fin-hypergrid';
import fetch from 'isomorphic-fetch';
//import styles from './styles.scss';
class Employees extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
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

    render() {
       return <div className="container">
       {this.list()}
       </div>   
    }
} 

export default Employees;
