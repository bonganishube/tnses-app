import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.bubble.css";

// Dynamically import ReactQuill with SSR disabled
const ReactQuill = dynamic(() => import("react-quill"), {
  ssr: false, // Disable SSR for this component
  loading: () => <div>Loading viewer...</div>, // Display loading state while the component is being loaded
});

const ReadText = ({ value }: { value: string }) => {
  return (
    <div>
      <ReactQuill theme="bubble" value={value} readOnly />
    </div>
  );
};

export default ReadText;
