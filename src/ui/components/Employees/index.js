import hypergrid from 'fin-hypergrid';
import fetch from 'isomorphic-fetch';
class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
        var grid = null;
        this.loadme = this.loadme.bind(this);
        fetch('http://localhost:3000/employees/').then((fetchedData)=>{
                return fetchedData.json();
            }).then((data)=>{
                this.props.load(data);
            });          
    }
    
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    componentDidUpdate(){
        grid.repaint();
        console.log('LOADME');
    }

    componentDidMount() {
        grid = new hypergrid('#grid1',  {
            data: this.props.employees.payload,
            schema: [
                {name:'name', header:'name'},
                {name:'lastname', header:'lastname'},
                {name:'birthday', header:'birthday'},
                {name:'startDay', header:'startDay'},
                {name:'AddButton', header:'AddButton'},]
        });  
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
       return <div>
        <div style={{backgroundColor:"white"}} id="grid1"></div>
       <button onClick={this.loadme}>LOAD ME</button>
       </div>   
    }
} 

export default Employees;
