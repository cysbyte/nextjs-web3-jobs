import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import dynamic from "next/dynamic";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FormFields } from "./JobInputForm";
import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface IProps {
  name: keyof FormFields;
  labelText?: string;
  register: UseFormRegister<FormFields>;
  setValue?: UseFormSetValue<FormFields>;
  errors?: FieldErrors<FormFields>;
}

export class EditorConvertToHTML extends Component<IProps> {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: any = (editorState: any) => {
    this.setState({
      editorState,
    });
    this.props.setValue?.(
      "jobDescription",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  };

  render() {
    const { editorState } = this.state;
    const { name, labelText, setValue, register, errors, ...otherProps } =
      this.props;
    return (
      <>
        <div
          className="container border border-gray-300 rounded-sm mt-4"
          {...register?.(name, {
            required: `Job Description can not be empty`,
          })}
        >
          <Editor
            editorState={editorState}
            toolbarClassName="toolbar-class"
            wrapperClassName="wrapper-class"
            editorClassName="editorClassName"
            editorStyle={{
              padding: "2px",
              minHeight: "20rem",
              lineHeight: "50%",
            }}
            onEditorStateChange={this.onEditorStateChange}
            localization={{ locale: "en" }}
          />
          {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        </div>
        {errors?.[name] && (
          <p className=" text-sm text-red-alert mt-2">
            {errors?.[name]?.message}
          </p>
        )}
      </>
    );
  }
}
