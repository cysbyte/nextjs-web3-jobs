"use client";

import { useEditor, EditorContent, } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Document from '@tiptap/extension-document'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import BulletList from '@tiptap/extension-bullet-list'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Placeholder from "@tiptap/extension-placeholder"
import Blockquote from "@tiptap/extension-blockquote";

const Tiptap = ({ onChange, content }: {onChange: (newContent: string)=>void, content: string}) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline, Document, Paragraph, Text, OrderedList, ListItem,
      Placeholder.configure({
        placeholder: 'Input job description...',
        emptyNodeClass: 'text-gray-800 dark:text-neutral-200'
      }),
      Link.configure({
        HTMLAttributes: {
          class: 'inline-flex items-center gap-x-1 text-blue-600 decoration-2 hover:underline font-medium dark:text-white'
        }
      }),
      BulletList.configure({
        HTMLAttributes: {
          class: 'list-disc list-inside text-gray-800 dark:text-white'
        }
      }),
      OrderedList.configure({
        HTMLAttributes: {
          class: 'list-decimal list-inside text-gray-800 dark:text-white'
        }
      }),
      ListItem,
      Blockquote.configure({
        HTMLAttributes: {
          class: 'text-gray-800 sm:text-xl dark:text-white'
        }
      })
    ],
    editorProps: {
      attributes: {
        class:
          "flex flex-col px-4 py-3 justify-start border-b border-r border-l min-h-96 overflow-auto border-gray-300 text-gray-800 items-start w-full gap-3 text-base leading-none pt-4 rounded-bl-xl rounded-br-xl outline-none",
        
      },
      
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
    
  });
  console.log(content)

  return (
    <div className="w-full my-2">
      <Toolbar editor={editor} content={content} />
      <div className="h-[100rem] overflow-auto" data-hs-editor-field="">
      <EditorContent editor={editor} />         
      </div>

    </div>
  );
};

export default Tiptap;