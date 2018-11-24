import React, { Component } from 'react';
import axios from 'axios';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import {
  EditorState,
  convertToRaw,
  ContentState
} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class FormEditBerita extends Component {
  constructor (props) {
    super (props)
    this.state = {
      editorState: EditorState.createEmpty(),
      judul: '',
      wysig: '',
      image: '',
    }
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount () {
    console.log('ID ===> ', this.props.id)
    axios.get(`http://35.201.1.205:3001/api/berita/readbyid/${this.props.id}`)
      .then((response) => {
        console.log(response.data.data)
        const { judul, isi } = response.data.data

        const blocksFromHtml = htmlToDraft(isi);
        const { contentBlocks, entityMap } = blocksFromHtml;
        const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
        const editorState = EditorState.createWithContent(contentState);
        
        this.setState({
          judul: judul,
          editorState: editorState,
        })
      })
      .catch((err) => {
        console.log(err)
      })
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
  onSubmit (e) {
    e.preventDefault();
    console.log('data => ', this.state.judul, draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
    var payload = {
      judul: this.state.judul,
      isi: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
      img: 'test.jpg'
    }
    console.log('payload=>', payload)
    axios.put(`http://35.201.1.205:3001/api/berita/updatebyid/${this.props.id}`, {
      judul: this.state.judul,
      isi: draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())),
      img: 'test.jpg'
    })
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  componentDidUpdate () {
    console.log('update', convertToRaw(this.state.editorState.getCurrentContent()))
  }
  render() {
    const { editorState } = this.state;
    return (
      <div style={{ padding: '50px 5%' }}>
        <h1>Form Edit Berita</h1>
        <Form>
          <FormGroup>
            <Label>Judul</Label>
            <Input onChange={this.onChange} type="text" name="judul" value={this.state.judul} />
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
          {/* <textarea className="wysig-output"
            disabled
            value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
          /> */}
          <Button onClick={this.onSubmit} color="primary">Simpan</Button>
        </Form>
      </div>
    );
  }
}

export default FormEditBerita;