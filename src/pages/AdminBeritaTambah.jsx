import React, { Component } from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class AdminBeritaTambah extends Component {
  constructor (props) {
    super (props)
    this.state = {
      editorState: EditorState.createEmpty(),
    }
    // this.onChange = (editorState) => this.setState({editorState});
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
  }
  onEditorStateChange (editorState) {
    this.setState({
      editorState,
    });
  };
  componentDidUpdate () {
    console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())))
  }
  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Container fluid>
          <Row>
            <Col md="12" style={{ background: 'yellow' }}>
              <h5 style={{ padding: '5px', marginBottom: '0px' }}>AdminLTE</h5>
            </Col>
          </Row>
          <Row>
            <Col md="2" style={{ width: '100%', height: '100vh', background: 'red' }}>
              <ul>
                <li>
                  <Link to="/admin/dashboard">Dashboard</Link>
                </li>
                <li>
                  <Link to="/admin/user">User</Link>
                </li>
                <li>
                  <Link to="/admin/berita">Berita</Link>
                </li>
              </ul>
            </Col>
            <Col md="10">
              <h1>Form Tambah Berita</h1>
              <Form>
                <FormGroup>
                  <Label>Judul</Label>
                  <Input type="text" name="judul" />
                </FormGroup>
                <FormGroup>
                  <Label>Isi Berita</Label>
                  {/* <Input type="textarea" name="isi"/> */}
                </FormGroup>
                
                <Editor
                  style={{ width: '100%', background: 'red' }}
                  editorState={editorState}
                  wrapperClassName="demo-wrapper"
                  editorClassName="demo-editor"
                  onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                  disabled
                  value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AdminBeritaTambah;