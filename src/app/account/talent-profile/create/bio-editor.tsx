"use client";

import React, { Component, useEffect, useState } from "react";
import {
  EditorState,
  convertToRaw,
  convertFromHTML,
  ContentState,
} from "draft-js";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import { FormFields } from "./job-post-form";
import {
  FieldErrors,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

interface IProps {
  //name: keyof FormFields;
  name: string;
  labelText?: string;
  //   register: UseFormRegister<FormFields>;
  //   setValue?: UseFormSetValue<FormFields>;
  //   getValues?: UseFormGetValues<FormFields>;
  //   errors?: FieldErrors<FormFields>;
}

const BioEditor = (props: IProps) => {
  // Convert HTML to ContentState
  //const blocksFromHTML = convertFromHTML(props.getValues?.('jobDescription') as string);
  useEffect(() => {
    const blocksFromHTML = convertFromHTML("");
    const contentState = ContentState.createFromBlockArray(
      blocksFromHTML.contentBlocks,
      blocksFromHTML.entityMap
    );
    setEditorState(EditorState.createWithContent(contentState));
  });

  // Create an initial EditorState with the ContentState
  const [editorState, setEditorState] = useState<any>();

  const onEditorStateChange = (editorState: any) => {
    setEditorState(editorState);
    // props.setValue?.(
    //   "jobDescription",
    //   draftToHtml(convertToRaw(editorState.getCurrentContent()))
    // );
  };

  const { name, labelText, ...otherProps } = props;

  if (typeof window === "undefined" || typeof document === "undefined") {
    return null; //return nothing on the server-side
  }
  return (
    <section>
      <div
        className="border border-gray-300 rounded-sm mt-4"
        // {...register?.(name, {
        //   required: `Job Description can not be empty`,
        // })}
      >
        <Editor
          editorState={editorState}
          toolbarClassName="toolbar-class"
          wrapperClassName="wrapper-class"
          editorClassName="editorClassName"
          editorStyle={{
            padding: "2px",
            minHeight: "20rem",
            lineHeight: "130%",
          }}
          onEditorStateChange={onEditorStateChange}
          localization={{ locale: "en" }}
        />
        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
      </div>
      {/* {errors?.[name] && (
        <p className=" text-sm text-red-alert mt-2">
          {errors?.[name]?.message}
        </p>
      )} */}
    </section>
  );
};

export default BioEditor;
