import fetch from 'isomorphic-fetch';
import ImageUploader from 'react-images-upload';
import {getEmployees, postEmployee, UpdateEmployee} from '../../utils/fetchHelper';
import styles from './styles.scss';

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: props.employeeData.name ? props.employeeData.name : '',
            lastname:props.employeeData.lastname ? props.employeeData.lastname : '',
            birthday:props.employeeData.birthday ? props.employeeData.birthday : '',
            startDay:props.employeeData.startDay ? props.employeeData.startDay : '',
            picture:'',
        };
        this.loadme = this.loadme.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.add = this.add.bind(this);
        this.onDrop = this.onDrop.bind(this);
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
        this.setState({
            id: props.employeeData.id ? props.employeeData.id : '',
            name: props.employeeData.name ? props.employeeData.name : '',
            lastname: props.employeeData.lastname ? props.employeeData.lastname : '',
            birthday: props.employeeData.birthday ? props.employeeData.birthday : '',
            startDay: props.employeeData.startDay ? props.employeeData.startDay : '',
            picture: props.employeeData.picture ? props.employeeData.picture : '',
        });
    }
    loadme() {
        const payload = { id: this.state.id, 
            name: this.state.name, 
            lastname: this.state.lastname, 
            birthday: this.state.birthday, 
            startDay: this.state.startDay,
            picture: this.state.picture
          };
        if(this.props.status === 'MODIFY_EMPLOYEE_PENDING') {
            UpdateEmployee((result)=>{ alert('ready'), console.log(result)}, payload);
        }else{
            postEmployee((result)=>{ alert('ready'), console.log(result)}, payload);
        }
        getEmployees( this.props.load);    
    }
    
    onDrop(picture){
        const reader = new FileReader();
        reader.onload = () => {
            const fileAsBinaryString = reader.result;
            this.setState({
                picture: fileAsBinaryString,
            });
                // do whatever you want with the file content
        };
        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');

        reader.readAsDataURL(picture[0]);
    }
    render() {
        const actualFoto = this.state.picture ? <div>Foto Actual: <img src={this.state.picture} width="60px" height="60px" /></div> : null;
       return <div className="employeeForm">
          <div className="form"> 
          <div><label for="name">Nombre: </label><input value={this.state.name} onChange={this.onChangeInput} id="name" placeholder="nombre"/></div>
          <div><label for="lastname">Apellido: </label><input value={this.state.lastname} onChange={this.onChangeInput} id="lastname" placeholder="apellido"/></div>
          <div><label for="birthday">Cumpleaños: </label><input value={this.state.birthday} onChange={this.onChangeInput} id="birthday" placeholder="cumpleaños"/></div>
          <div><label for="startDay">Dia de ingreso: </label><input value={this.state.startDay} onChange={this.onChangeInput} id="startDay" placeholder="dia que ingreso"/></div>
          {actualFoto}
          </div>
          <div className="imgUploader"><ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /></div>
          <div><button onClick={this.add}>Guardar</button></div>
       </div>   

    }
} 

export default Employee;
