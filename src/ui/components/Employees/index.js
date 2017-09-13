import hypergrid from 'fin-hypergrid';

export class Employees extends React.Component {

    constructor(props){
        super(props);
        this.state = {}
    }
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    employeeList() {
      const List = [{name:'a'},{name:'b'},{name:'c'},{name:'d'}];
      return List.map((item) => <div>{item.name}</div>);
    }

    componentDidMount() {
        var grid = new hypergrid('#grid1',  {
             data: [
                 { 'symbol':'APPL', 'name':'Apple Inc.', 'prevclose':'93.13' },
                 { 'symbol':'MSFT', 'name':'Microsoft Corporation', 'prevclose':'51.91' },
                 { 'symbol':'TSLA', 'name':'Tesla Motors Inc.', 'prevclose':'196.40' },
                 { 'symbol':'IBM', 'name':'International Business Machines Corp', 'prevclose':'155.35' }
             ]
         })
    }

    render() {
       return <div style={{backgroundColor:"white"}} id="grid1"></div>   
    }
} 