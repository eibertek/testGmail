import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';
import { connect } from 'react-redux';
import {TemplateEditor} from '../TemplateEditor/index.js';
import Employees from '../Employees/index.js';
import Employee from '../Employees/employee.js';
import { loadEmployees, 
         add_employee_save_pending, 
         add_employee_success,
         modify_employee_load,
         modify_employee_cancel,
         modify_employee_save,
         delete_employee_pending,
         delete_employee_success } from '../Employees/Actions/';

const mapDispatch = dispatch => {
  return {
    load: options => {
      dispatch(loadEmployees(options))
    },
    add_employee_save_pending: () => {
      dispatch(add_employee_save_pending())
    },    
    add_employee_save_success: () => {
      dispatch(add_employee_success())
    },    
    load_employee_data: (employee) => {
      dispatch(modify_employee_load(employee))
    },        
    save_employee_data: (employee) => {
      dispatch(modify_employee_save(employee))
    },   
    save_employee_cancel: (employee) => {
      dispatch(modify_employee_cancel())
    },     
    delete_employee: (employee) => {
      dispatch(delete_employee_pending(employee))
    },          
    delete_employee_success: (employee) => {
      dispatch(delete_employee_success(employee))
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
          {
            id:'employees1',
            title: 'Employees',
            type:'react-component',
            component: 'testItem2',
            props: {store, employees:props.employees, load:props.load, load_employee_data:props.load_employee_data}
          },
          {
            id:'master1',            
            type:'column',
            content: [
              {
                  id:'employees2',
                  title: 'Employee',
                  type:'react-component',
                  component: 'testItem3',
                  props: {store, status: props.status, employeeData: props.employeeData}
              }         
            ]
          }
        ]
      }]
    };   

}  
 componentDidMount(){
    const myLayout = new GoldenLayout( this.getConfig(this.props) );
    myLayout.registerComponent( 'testItem' , TemplateEditor);
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

