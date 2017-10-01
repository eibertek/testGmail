import fetch from 'isomorphic-fetch';
import ImageUploader from 'react-images-upload';
import {getEmployees, postEmployee, UpdateEmployee} from '../../utils/fetchHelper';
import {validDate} from '../../utils/dateUtils';
import styles from './styles.scss';

class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            id: '',
            name: '',
            lastname: '',
            birthday: '',
            startDay: '',
            picture: '',
            project: '',
            slackname:'',
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
        this.onDrop = this.onDrop.bind(this);
    }

    add(evt) {
        if(!validDate(this.state.birthday)) return console.log('Cumpleaños no valido');
        if(this.state.startDay != '' && !validDate(this.state.startDay)) return console.log('Ingreso no valido');
        if(this.state.name === '' || this.state.lastname === '' || this.state.birthday === '') return;
        const payload = { id: this.state.id ? this.state.id: null, 
            name: this.state.name, 
            lastname: this.state.lastname, 
            birthday: this.state.birthday, 
            startDay: this.state.startDay,
            picture: this.state.picture,
            project: this.state.project,
            slackname:this.state.slackname,            
          };
        if(this.props.status === 'MODIFY_EMPLOYEE_PENDING') {
            UpdateEmployee((result)=>{ console.log(result)}, payload);
        }else{
            postEmployee((result)=>{ console.log(result)}, payload);
        }
        getEmployees( this.props.load); 
        this.cancel();
        return evt.target.value;
    }

    cancel(evt) {
        this.props.save_employee_cancel();
        this.setState({
            id: '',
            name: '',
            lastname: '',
            birthday: '',
            startDay: '',
            picture: '',
            project: '',
            slackname: '',            
        });        
    }

    onChangeInput(evt) {
        this.setState({[evt.target.id]:evt.target.value});
        return evt.target.value;
    }

    componentWillReceiveProps(props){
        if(props.status == 'MODIFY_EMPLOYEE_PENDING') {
            this.setState({
                id: props.employeeData.id ? props.employeeData.id : '',
                name: props.employeeData.name ? props.employeeData.name : '',
                lastname: props.employeeData.lastname ? props.employeeData.lastname : '',
                birthday: props.employeeData.birthday ? props.employeeData.birthday : '',
                startDay: props.employeeData.startDay ? props.employeeData.startDay : '',
                picture: props.employeeData.picture ? props.employeeData.picture : '',
                project: props.employeeData.project ? props.employeeData.project : '',
                slackname:props.employeeData.slackname ? props.employeeData.slackname : '',                
            });
        }
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
          <div><label htmlFor="name">Nombre: </label><input value={this.state.name} onChange={this.onChangeInput} id="name" placeholder="nombre"/></div>
          <div><label htmlFor="lastname">Apellido: </label><input value={this.state.lastname} onChange={this.onChangeInput} id="lastname" placeholder="apellido"/></div>
          <div><label htmlFor="birthday">Cumpleaños: </label><input value={this.state.birthday} onChange={this.onChangeInput} id="birthday" placeholder="cumpleaños"/></div>
          <div><label htmlFor="startDay">Dia de ingreso: </label><input value={this.state.startDay} onChange={this.onChangeInput} id="startDay" placeholder="dia que ingreso"/></div>
          <div><label htmlFor="project">Proyecto: </label><input value={this.state.project} onChange={this.onChangeInput} id="project" placeholder="Proyecto al que pertenece"/></div>
          <div><label htmlFor="slackname">Slack Name: </label><input value={this.state.slackname} onChange={this.onChangeInput} id="slackname" placeholder="Nombre en Slack"/></div>
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
          <div><button onClick={this.cancel}>Cancelar</button></div>
       </div>   

    }
} 

export default Employee;
