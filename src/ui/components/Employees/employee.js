import fetch from 'isomorphic-fetch';
import {getEmployees, postEmployee} from '../../utils/fetchHelper';
import styles from './styles.scss';

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.employeeData.name ? props.employeeData.name : '',
            lastname:props.employeeData.lastname ? props.employeeData.lastname : '',
            birthday:props.employeeData.birthday ? props.employeeData.birthday : '',
            startDay:props.employeeData.startDay ? props.employeeData.startDay : '',
        };
        this.loadme = this.loadme.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.add = this.add.bind(this);
    }

    add(evt) {
        this.loadme();
        return evt.target.value;
    }

    onChangeInput(evt) {
        this.setState({[evt.target.id]:evt.target.value});
        return evt.target.value;
    }

    componentWillReceiveProps(props){
        console.log(props.status);
        this.setState({
            name: props.employeeData.name ? props.employeeData.name : '',
            lastname:props.employeeData.lastname ? props.employeeData.lastname : '',
            birthday:props.employeeData.birthday ? props.employeeData.birthday : '',
            startDay:props.employeeData.startDay ? props.employeeData.startDay : '',
        });
    }
    loadme() {
        postEmployee((result)=>{ alert('ready'), console.log(result)}, { id: this.state.id, 
                                              name: this.state.name, 
                                              lastname: this.state.lastname, 
                                              birthday: this.state.birthday, 
                                              startDay: this.state.startDay
                                            });

        getEmployees( this.props.load);    
    }
    
    render() {
       return <div className="employeeForm">
          <div><label for="name">Nombre: </label><input value={this.state.name} onChange={this.onChangeInput} id="name" placeholder="nombre"/></div>
          <div><label for="lastname">Apellido: </label><input value={this.state.lastname} onChange={this.onChangeInput} id="lastname" placeholder="apellido"/></div>
          <div><label for="birthday">Cumpleaños: </label><input value={this.state.birthday} onChange={this.onChangeInput} id="birthday" placeholder="cumpleaños"/></div>
          <div><label for="startDay">Dia de ingreso: </label><input value={this.state.startDay} onChange={this.onChangeInput} id="startDay" placeholder="dia que ingreso"/></div>
          <div><button onClick={this.add}>Guardar</button></div>
       </div>   
    }
} 

export default Employee;
