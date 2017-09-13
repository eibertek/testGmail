import React, { Component } from 'react';
import GoldenLayout from 'golden-layout';
import {TemplateEditor} from '../TemplateEditor/index.js';
import {Employees} from '../Employees/index.js';

const defaultConfig = {
  content: [{
    type: 'row',
    content: [
       {
        title: 'Grid',
        type:'react-component',
        component: 'testItem',
        props: {value: 'I\'m on the left'}
       },
        {
        title: 'Template Editor',
        type:'react-component',
        component: 'testItem2'
       }
    ]
  }]
};

export const Dashboard = (props) => {
var myLayout = new GoldenLayout( defaultConfig );
myLayout.registerComponent( 'testItem' , TemplateEditor);
myLayout.registerComponent( 'testItem2' , Employees);
myLayout.init();

return <myLayout />;
};

