import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import {
  EditorState,
  convertToRaw,
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { connect } from 'react-redux';
import { adminCreateBeritaAction } from '../action/action_berita';
import { bindActionCreators } from 'redux';

class FormTambahBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      editorState: EditorState.createEmpty(),
      judul: '',
      wysig: '',
      image: '',
      namaFile: '',
      fileContent: '',
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleFiles = this.handleFiles.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  }
  onChange (e) {
    console.log(e.target.name, ' = ', e.target.value)
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleFiles (e) {
    console.log('e===========>', e.target.files[0])
    console.log('handle files->', e.target.value)
    this.setState({
      namaFile: e.target.files
    })
  }
  onSubmit (e) {
    e.preventDefault();
    
    var formData = new FormData();
    var imagefile = document.querySelector('#file');
    formData.append("judul", this.state.judul);
    formData.append("isi", draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),);
    formData.append("img", imagefile.files[0]);
    
    this.props.adminCreateBeritaAction(formData)
  }
  componentDidUpdate () {
    console.log('update', convertToRaw(this.state.editorState.getCurrentContent()))
  }
  render() {
    const { editorState } = this.state;
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Tambah Berita</h1>
        <Form encType="application/x-www-form-urlencoded">
          <FormGroup>
            <Label>Judul</Label>
            <Input onChange={this.onChange} type="text" name="judul" />
          </FormGroup>
          <FormGroup>
            <Label>Isi Berita</Label>
            <Editor
              style={{ width: '100%', background: 'red' }}
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
          </FormGroup>
          <Input type="file" id="file" name="img" onChange={this.handleFiles} multiple/> <br/>
          <Button onClick={this.onSubmit} color="primary">Simpan</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  adminCreateBeritaAction
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(FormTambahBerita);