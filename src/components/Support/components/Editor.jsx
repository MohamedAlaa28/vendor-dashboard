import React, { useState } from 'react';
import dynamic from 'next/dynamic';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
  ssr: false,
});

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: [] }],
    [{ font: [] }],
    [{ align: [] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    [{ color: [] }, { background: [] }],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "color",
  "image",
  "background",
  "align",
  "size",
  "font",
];

const Editor = () => {
  const [value, setValue] = useState("");
  const handleProcedureContentChange = (content, delta, source, editor) => {
    setValue(content);
  };

  return (
    <div className="text-editor">
      <div className="editor-toolbar">
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={value}
          onChange={handleProcedureContentChange}
        />
      </div>
    </div>
  );
};

export default Editor;
