import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';
import { connect } from 'react-redux';
import {TemplateEditor} from '../TemplateEditor/index.js';
import Employees from '../Employees/index.js';
import Employee from '../Employees/employee.js';
import { loadEmployees, add_employee_save_pending, add_employee_success } from '../Employees/Actions/';

const mapDispatch = dispatch => {
  return {
    load: options => {
      dispatch(loadEmployees(options))
    },
    add_employee_save_pending: () => {
      dispatch(add_employee_save_pending())
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
                  props: {store, employees:props.employees, load:props.load}
              },
              {
                  id:'employees2',
                  title: 'Employee',
                  type:'react-component',
                  component: 'testItem3',
                  props: {store, employees:props.employees, add_employee_save_pending:props.add_employee_save_pending}
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
    myLayout.registerComponent( 'testItem3' ,  connect(state => state, mapDispatch)(Employee));
    myLayout.init();
    this.setState({layout: myLayout});    
 }
  componentDidUpdate(){
    // if(this.state.layout.root){
    //   if(this.state.layout.root.getItemsById('employees1')[0]){
    //       this.state.layout.root.getItemsById('employees1')[0].remove();
    //   }
    //   this.state.layout.root.getItemsById('master0')[0].addChild(              {
    //               id:'employees3',
    //               title: 'Employees',
    //               type:'react-component',
    //               component: 'testItem2',
    //               props: {employees:this.props.employees, load:this.props.load}
    //   });
    // }
  }
 render() {
    return <myLayout />;
 }

};

Dashboard.contextTypes = {
  store: React.PropTypes.object
}

export default Dashboard;

