import hypergrid from 'fin-hypergrid';
import fetch from 'isomorphic-fetch';
class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
        if(this.props.employees.length===0){
            fetch('http://localhost:3000/employees/').then((fetchedData)=>{
                return fetchedData.json();
            }).then((data)=>{
                this.props.load(data);
            });          
            console.log(props);                    
        }

    }
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    componentDidMount() {
        //Aqui agregar el fetch y luego dispatch la accion correspondiente
        var grid = new hypergrid('#grid1',  {
             data: this.props.employees.payload,
             schema: [
                 {name:'name', header:'name'},
                 {name:'lastname', header:'lastname'},
                 {name:'birthday', header:'birthday'},
                 {name:'startDay', header:'startDay'},
                 {name:'AddButton', header:'AddButton'},]
         });
        if(grid.behavior) {
            grid.behavior.dataModel.getCell = (config, renderName)=>{
                if(config.gridCell.x === 4 && config.gridCell.y > 0){
                    //let style =  grid.cellRenderers.get('button');
                    //return style;
                }
                return grid.cellRenderers.get(renderName);
            };         
        }
    }

    render() {
       return <div style={{backgroundColor:"white"}} id="grid1"></div>   
    }
} 

export default Employees;
