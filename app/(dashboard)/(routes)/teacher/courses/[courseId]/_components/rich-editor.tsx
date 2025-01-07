"use client"

import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

interface RichEditorProps {
  placeholder: string;
  onChange: (value: string) => void;
  value?: string;
}

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Disable SSR for this component
  loading: () => <div>Loading editor...</div>, // Display loading state while the component is being loaded
});

const RichEditor = ({ placeholder, onChange, value }: RichEditorProps) => {
  return (
    <div>
      <ReactQuill
        theme="snow"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RichEditor;
