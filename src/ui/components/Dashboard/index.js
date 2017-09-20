import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';
import { connect } from 'react-redux';
import {TemplateEditor} from '../TemplateEditor/index.js';
import Employees from '../Employees/index.js';
import Employee from '../Employees/employee.js';
import { loadEmployees, 
         add_employee_save_pending, 
         add_employee_success,
         modify_employee_load } from '../Employees/Actions/';

const mapDispatch = dispatch => {
  return {
    load: options => {
      dispatch(loadEmployees(options))
    },
    add_employee_save_pending: () => {
      dispatch(add_employee_save_pending())
    },    
    load_employee_data: (employee) => {
      dispatch(modify_employee_load(employee))
    },        
    save_employee_data: (employee) => {
      dispatch(modify_employee_save(employee))
    },        
  }
};

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      layout:null,
    }    
  } 
getConfig(props) {
  const {store} = this.context;
  return {
      content: [{
        id:'master0',
        type: 'row',
        content: [
/*          {
            title: 'Template Editor',
            type:'react-component',
            component: 'testItem',
            props: {value: 'variable2'}
          },*/
          {
            id:'master1',            
            type:'column',
            content: [
              {
                  id:'employees1',
                  title: 'Employees',
                  type:'react-component',
                  component: 'testItem2',
                  props: {store, employees:props.employees, load:props.load, load_employee_data:props.load_employee_data}
              },
              {
                  id:'employees2',
                  title: 'Employee',
                  type:'react-component',
                  component: 'testItem3',
                  props: {store, employeeData: props.employeeData}
              }         
            ]
          }
        ]
      }]
    };   

}  
 componentDidMount(){
    const myLayout = new GoldenLayout( this.getConfig(this.props) );
    //myLayout.registerComponent( 'testItem' , TemplateEditor);
    myLayout.registerComponent( 'testItem2' ,  connect(state => state, mapDispatch)(Employees));
    myLayout.registerComponent( 'testItem3' ,  connect(state => state.employee, mapDispatch)(Employee));
    myLayout.init();
    this.setState({layout: myLayout});    
 }

 render() {
    return <myLayout />;
 }

};

Dashboard.contextTypes = {
  store: React.PropTypes.object
}

export default Dashboard;

