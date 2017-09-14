import hypergrid from 'fin-hypergrid';

class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            loaded:false,
        };
    }
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    employeeList() {
      const List = [{name:'a'},{name:'b'},{name:'c'},{name:'d'}];
      return List.map((item) => <div>{item.name}</div>);
    }

    componentDidMount() {
        if(this.props.employees.length === 0) this.props.load();
        var grid = new hypergrid('#grid1',  {
             data: this.props.employees
         })
    }

    render() {
       return <div style={{backgroundColor:"white"}} id="grid1"></div>   
    }
} 

export default Employees;
