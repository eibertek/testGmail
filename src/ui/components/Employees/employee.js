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
        this.loadme = this.loadme.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
        this.add = this.add.bind(this);
        if(!props.employees.status) props.add_employee_save_pending();
    }

    add(evt) {
        console.log('ADD', evt.target);
        this.loadme();
        return evt.target.value;
    }

    onChangeInput(evt) {
        this.setState({[evt.target.id]:evt.target.value});
        return evt.target.value;
    }

    loadme() {
        this.props.employees.payload.push( {
            "id": "meiberman05121984",
            "name": this.state.name,
            "lastname": this.state.lastname,
            "birthday": this.state.birthday,
            "proyect": "Intelligize",
            "startDay": this.state.startDay,
            "picture": ""
          });
        this.props.load(this.props.employees.payload);        
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
