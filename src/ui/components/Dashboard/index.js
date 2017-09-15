import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';
import { connect } from 'react-redux';
import {TemplateEditor} from '../TemplateEditor/index.js';
import Employees from '../Employees/index.js';
import Employee from '../Employees/employee.js';
import { loadEmployees } from '../Employees/Actions/';

export const Dashboard = (props) => {
 const config =  {
  content: [{
    type: 'row',
    content: [
       {
        title: 'Template Editor',
        type:'react-component',
        component: 'testItem',
        props: {value: 'variable2'}
       },
      {
        type:'column',
        content: [
          {
              title: 'Employees',
              type:'react-component',
              component: 'testItem2',
              props: {employees:props.employees, load:props.load}
          },
          {
              title: 'Employee',
              type:'react-component',
              component: 'testItem3',
              props: {employees:props.employees, load:props.load}
          }         
                     
        ]
      }
    ]
  }]
};   
var myLayout = new GoldenLayout( config );
myLayout.registerComponent( 'testItem' , TemplateEditor);
myLayout.registerComponent( 'testItem2' , Employees);
myLayout.registerComponent( 'testItem3' , Employee);
myLayout.init();

return <myLayout />;
};

const mapDispatch = dispatch => {
  return {
    load: options => {
      dispatch(loadEmployees(options))
    },
  }
};

export default connect(state => state, mapDispatch)(Dashboard);

