import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import dynamic from "next/dynamic";
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);


export class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  }

  onEditorStateChange: any = (editorState: any) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="container border border-gray-300 rounded-sm my-5">
        <Editor
          editorState={editorState}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapper-class"
          editorClassName="editorClassName"
          editorStyle={{
            padding: "5px",
            minHeight: '20rem',
            lineHeight: '50%',
          }}
          onEditorStateChange={this.onEditorStateChange}
          localization={{ locale: "en" }}
          
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
    );
  }
}