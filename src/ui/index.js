import React from 'react';
import { render } from 'react-dom';
import Container from './components/container.js';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        }
        this.onEditorStateChange = this.onEditorStateChange.bind(this);
    }
    componentDidCatch() {
        return <div>OOOPSSS</div>;
    }

    onEditorStateChange(final){
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
        this.setState({
        editorState:final,
        });        
    }
    render() {
        return <Editor
        editorState={this.state.editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={this.onEditorStateChange}
        />        
        //return <div>Componente</div>;
    }
} 

render(<App />, document.getElementById('react-app'));