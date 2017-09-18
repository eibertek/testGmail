import fetch from 'isomorphic-fetch';
class Employee extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name:'',
            lastname:'',
            birthday:'',
            startDay:''
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        if(!props.employees.status) props.add_employee_save_pending();
    }

    add(evt) {
        console.log('ADD', evt.target);
        return evt.target.value;
    }

    onChangeInput(evt) {
        this.setState({[evt.target.id]:evt.target.value});
        return evt.target.value;
    }
    render() {
       return <div >
           <input value={this.state.name} onChange={this.onChangeInput} id="name" placeholder="nombre"/>
           <input value={this.state.lastname} onChange={this.onChangeInput} id="lastname" placeholder="apellido"/>
           <input value={this.state.birthday} onChange={this.onChangeInput} id="birthday" placeholder="cumpleaños"/>
           <input value={this.state.startDay} onChange={this.onChangeInput} id="startDay" placeholder="dia que ingreso"/>
           <button onClick={this.add}>Guardar</button>
       </div>   
    }
} 

export default Employee;
